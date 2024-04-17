'use server';

import InterviewController from '@/modules/internal/interview/InterviewController';
import { Stack } from '@prisma/client';

export const getQuestions = async (stack: Stack, difficulty: string) => {
	const response = await InterviewController.startInterview(stack, difficulty);
	return response;
};
