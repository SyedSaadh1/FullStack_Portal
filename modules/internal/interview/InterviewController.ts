import { Stack } from '@prisma/client';
import { getServerSession } from 'next-auth';
import InterviewServices from './InterviewServices';
import prisma from '@/prisma';
import { redirect } from 'next/navigation';

export default class InterviewController {
	static startInterview = async (stack: Stack, difficulty: string) => {
		const session = await getServerSession();
		if (session?.user?.email) {
			const user = await prisma.user.findFirstOrThrow({
				where: { email: session?.user?.email }
			});
			const interview = await InterviewServices.startNewInterview(
        user?.id as string,
        stack,
        difficulty
			);
			if (interview?.id) {
				return redirect(`/interview/${interview?.id}`);
			}
		}

		return {};
	};

	static getInterviewDetails = async (interviewId: string) => {
		const session = await getServerSession();
		if (session?.user?.email) {
			const interview =
        await InterviewServices.getInterviewDetails(interviewId);
			return interview;
		}
		return null;
	};
}
