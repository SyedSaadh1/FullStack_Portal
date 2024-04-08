import { Stack } from '@prisma/client';
import googleAIAdapter from '../adapters/googleAi.adapter';

export default class QuestionGenerator {
	static async getMCAQuestions(stack: Stack, difficulty: string) {
		const prompt = `Please provide a JSON array of 5 interview questions related to the ${stack.stackName} with ${difficulty} difficulty. Include question text, answer type (TEXT or CODE_CHALLENGE), and if applicable, the correct answer(s).`;

		// const prompt = 'Please provide a JSON array of 5 interview questions related to the MERN stack for a frontend developer role with medium difficulty. Include question text, answer type (MCQ or code challenge), and if applicable, the correct answer(s).';

		const response = await googleAIAdapter.runChat(prompt);
		return response;
	}
}
