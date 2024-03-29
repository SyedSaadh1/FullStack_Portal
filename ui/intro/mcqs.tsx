'use client';
import { Button } from '@nextui-org/react';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import React, { useState } from 'react';

export default function MCQs({ questions = [] }: any) {
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(false);
	const [showResult, setShowResult] = useState(false);
	const [Result, setResult] = useState({
		score: 0,
		correctAnswers: 0,
		wrongAnswers: 0
	});
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

	const { question, options, correct } = questions[activeQuestion];

	const onClickNext = () => {
		setSelectedAnswerIndex(null);
		setResult(prev =>
			selectedAnswer
				? {
					...prev,
					score: prev.score + 5,
					correctAnswers: prev.correctAnswers + 1
				}
				: { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
		);
		if (activeQuestion !== questions.length - 1) {
			setActiveQuestion(prev => prev + 1);
		} else {
			setActiveQuestion(0);
			setShowResult(true);
		}
	};

	const onAnswerSelected = (answer: any, index: any) => {
		setSelectedAnswerIndex(index);
		if (answer === correct) {
			setSelectedAnswer(true);
			console.log('right');
		} else {
			setSelectedAnswer(false);
			console.log('wrong');
		}
	};

	return (
		<div className="flex flex-col gap-4">
			{!showResult ? (
				<Card className="w-[550px]">
					<CardHeader>{question}</CardHeader>
					<CardBody className="flex flex-col gap-4">
						<form className="flex flex-col gap-4">
							{options.map((option: any, idx: any) => (
								<label className="ml-4" key={idx}>
									<input
										type="radio"
										name="options"
										value={option}
										onClick={() => onAnswerSelected(option, idx)}
										key={option}
									></input>
									{option}
								</label>
							))}
						</form>
					</CardBody>
					<CardFooter className="p-4 flex justify-end">
						<Button
							onClick={onClickNext}
							disabled={selectedAnswerIndex === null}
						>
							{activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
						</Button>
					</CardFooter>
				</Card>
			) : (
				<Card className="w-[550px] bg-gray-200 ml-auto mr-auto">
					<CardHeader className="text-2xl font-bold">Result</CardHeader>
					<CardBody>
						<div className="flex flex-col gap-4">
							<p className="text-lg">
                Total Questions :
								<span className="text-emerald-500">{questions.length}</span>
							</p>
							<p className="text-lg">
                Total Score :
								<span className="text-emerald-500">{Result.score}</span>
							</p>
							<p className="text-lg">
                Correct Answers :
								<span className="text-emerald-500">
									{Result.correctAnswers}
								</span>
							</p>
							<p className="text-lg">
                Wrong Answers :
								<span className="text-emerald-500">{Result.wrongAnswers}</span>
							</p>
						</div>
					</CardBody>
				</Card>
			// <div className="result">
			//   <h3>Result</h3>
			//   <p>
			//     Total Question: <span>{questions.length}</span>
			//   </p>
			//   <p>
			//     Total Score:<span> {Result.score}</span>
			//   </p>
			//   <p>
			//     Correct Answers:<span> {Result.correctAnswers}</span>
			//   </p>
			//   <p>
			//     Wrong Answers:<span> {Result.wrongAnswers}</span>
			//   </p>
			// </div>
			)}
		</div>
	);
}
