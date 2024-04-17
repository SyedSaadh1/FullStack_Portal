import React from 'react';
import InterviewPage from './InterviewPage';
import InterviewController from '@/modules/internal/interview/InterviewController';
import { Interview } from '@prisma/client';

const InterviewPageContainer = async ({ params: { interviewId } }: any) => {
	const interview = (await InterviewController.getInterviewDetails(
		interviewId
	)) as Interview | null;
	return (
		<div>
			<InterviewPage interview={interview} />
		</div>
	);
};

export default InterviewPageContainer;
