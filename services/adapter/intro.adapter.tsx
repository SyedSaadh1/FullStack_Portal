import OpenAI from 'openai';

const anyscale = new OpenAI({
	baseURL: 'https://api.endpoints.anyscale.com/v1',
	apiKey: 'esecret_758lerj8fwztl1irrzle7e3erx'
});

export async function Sample_intros(prompt: string) {
	const completion = await anyscale.chat.completions.create({
		model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
		messages: [
			{
				role: 'system',
				content: `Based on the provide resume content, please generate an impressive self-introduction derived from the overall resume content. Ensure that it can be delivered within a maximum of 2 minutes, which is the typical human delivery time. Provide three introduction content in JSON format like this 
        [{ name: <INTRODUCTION_TITLE>, content: <INTRODUCTION_CONTENT> }]`
			},
			{ role: 'user', content: prompt }
		],
		temperature: 0.7
	});
	const response = JSON.parse(
		completion.choices?.[0]?.message?.content || '[]'
	);

	return response;
}

export async function compareSelfIntro(selfIntro: string, intros: any = []) {
	const completion = await anyscale.chat.completions.create({
		model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
		messages: [
			{
				role: 'system',
				content: `
        Here three self introduction of user
        ${intros.map(
		(intro: any, idx: any) => `${idx + 1}. ${intro?.content}\\n`
	)}
        Compare these introduction individually with provide introduction content. Make sure you provide all the responses in a single JSON Array format like below
        [{score: <SCORE>, details:<WHY_THIS_SCORE_IS_PROVIDED>, index: <INTRODUCTION_INDEX>}]
        
        
        RULES to follow:
        - Compare the introduction provide by the user with available three introductions
        - Explain why that score is provided, highlight the points that matched and what it lacks to get best score
        `
			},
			{ role: 'user', content: selfIntro }
		],
		temperature: 0.7
	});
	const response = JSON.parse(
		completion.choices?.[0]?.message?.content || '[]'
	);
	return response;
}

export async function Mcqs(prompt: string) {
	const completion = await anyscale.chat.completions.create({
		model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
		messages: [
			{
				role: 'system',
				content: `Considering the given job description, kindly generate a set of 10 multiple-choice questions (MCQs) along with their respective answers, and format them in JSON.
                JSON format should be like this
                [
                    {
                        "question": <QUESTION>,
                        "options": [
                            <OPTION_A>,
                            <OPTION_B>,
                            <OPTION_C>,
                            <OPTION_D>,
                        ],
                        "correct": <CORRECT_OPTION>
                    }
                ]
                `
			},
			{ role: 'user', content: prompt }
		],
		temperature: 0.7
	});
	const response = completion.choices?.[0]?.message?.content;

	return (response || []) as any;
}
