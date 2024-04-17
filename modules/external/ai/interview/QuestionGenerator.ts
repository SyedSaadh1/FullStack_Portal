import { Stack } from '@prisma/client';
import googleAIAdapter from '../adapters/googleAi.adapter';

export default class QuestionGenerator {
	static async getMCAQuestions(stack: Stack, difficulty: string) {
		const prompt = `Please provide 15 interview questions related to the ${stack.stackName} topic with ${difficulty} level of difficulty. Include question text, answer type (TEXT or CODE_CHALLENGE), time limit (in minutes) and if applicable, the correct answer(s).
		
		*Note: Strictly please provide the response purely in JSON Array format [{question: <QUESTION_TEXT>, type: <ANSWER_TYPE>, timeLimit: <TIME_LIMIT_IN_MINUTES>, correctAnswer: <CORRECT_ANSWER>}]

		`;

		// const prompt = 'Please provide a JSON array of 5 interview questions related to the MERN stack for a frontend developer role with medium difficulty. Include question text, answer type (MCQ or code challenge), and if applicable, the correct answer(s).';

		const response = await googleAIAdapter.runChat(prompt);
		return response;
	}
}
