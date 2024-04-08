const {
	GoogleGenerativeAI,
	HarmCategory,
	HarmBlockThreshold
} = require('@google/generative-ai');

const MODEL_NAME = process.env.GOOGLE_AI_MODEL || 'gemini-1.0-pro';
const API_KEY = process.env.GOOGLE_AI_API_KEY;

const generationConfig = {
	temperature: 0.9,
	topK: 1,
	topP: 1,
	maxOutputTokens: 2048
};

const safetySettings = [
	{
		category: HarmCategory.HARM_CATEGORY_HARASSMENT,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
	},
	{
		category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
	},
	{
		category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
	},
	{
		category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
	}
];

class GoogleAIAdapter {
	private genAI = new GoogleGenerativeAI(API_KEY);
	private model;

	constructor() {
		this.model = this.genAI.getGenerativeModel({ model: MODEL_NAME });
	}

	runChat = async (input: string) => {
		const chat = this.model.startChat({
			generationConfig,
			safetySettings,
			history: []
		});

		const result = await chat.sendMessage(input);
		const response = result.response;
		return response.text();
	};
}

const googleAIAdapter = new GoogleAIAdapter();
export default googleAIAdapter;
