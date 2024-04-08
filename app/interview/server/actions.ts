'use server';

import InterviewController from '@/modules/internal/interview/technologies/InterviewController';
import { Stack } from '@prisma/client';

export const getQuestions = async (stack: Stack, difficulty: string) => {
	console.log('Hey.');
	const response = await InterviewController.startInterview(stack, difficulty);
	console.log(response);
	return response;
};
