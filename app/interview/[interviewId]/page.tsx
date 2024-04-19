import React from 'react';
import InterviewPage from './InterviewPage';
import InterviewController from '@/modules/internal/interview/InterviewController';
import { Interview } from '@prisma/client';
import { Spinner } from '@nextui-org/react';

const InterviewPageContainer = async ({ params: { interviewId } }: any) => {
	const interview = (await InterviewController.getInterviewDetails(
		interviewId
	)) as Interview | null;
	return (
		<div>
			<section className="min-h-[80vh] flex items-center justify-center">
				<Spinner size="lg" />
			</section>
      ;
			<InterviewPage interview={interview} />
		</div>
	);
};

export default InterviewPageContainer;
