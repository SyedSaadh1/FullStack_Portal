import QuestionGenerator from '@/modules/external/ai/interview/QuestionGenerator';
import { Stack } from '@prisma/client';

export default class InterviewController {
	static startInterview = async (stack: Stack, difficulty: string) => {
		return await QuestionGenerator.getMCAQuestions(stack, difficulty);
	};
}
