import QuestionGenerator from '@/modules/external/ai/interview/QuestionGenerator';
import prisma from '@/prisma';
import StringUtils from '@/utils/string.utls';
import { Difficulty, Stack } from '@prisma/client';

export default class InterviewServices {
	static async startNewInterview(
		userId: string,
		stack: Stack,
		difficulty: string
	) {
		let questions: any = [];
		try {
			questions = await this.getQuestions(stack, difficulty);
		} catch (error) {
			questions = await this.getQuestions(stack, difficulty);
		}
		const interview = await prisma.interview.create({
			data: {
				userId: userId,
				stackId: stack.id,
				roleType: stack.type,
				questions: {
					create: questions.map((question: any) => ({
						text: question?.question,
						questionType: question?.type,
						difficulty: difficulty as Difficulty
					}))
				}
			}
		});

		return interview; //await this.getInterviewDetails(interview.id);
	}

	static async getInterviewDetails(interviewId: string) {
		return await prisma.interview.findFirstOrThrow({
			where: {
				id: interviewId
			},
			select: {
				id: true,
				stack: {
					select: {
						stackName: true,
						type: true
					}
				},
				interviewDate: true,
				_count: {
					select: {
						questions: true
					}
				},
				questions: {
					select: {
						id: true,
						text: true,
						questionType: true,
						difficulty: true
					}
				}
			}
		});
	}

	private static async getQuestions(stack: Stack, difficulty: string) {
		const response = await QuestionGenerator.getMCAQuestions(stack, difficulty);
		const questions = StringUtils.getJSONArrayFromString(response);
		return questions[0];
	}
}
