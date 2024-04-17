'use client';
import Title from '@/components/ui/text/Title';
import Container from '@/ui/layout/container';
import { Button, RadioGroup, Radio } from '@nextui-org/react';
import React, { useMemo, useState } from 'react';
import { useStack } from './state/stackReducer';
import TechDetail from './TechDetail';
import { Stack } from '@prisma/client';
import { getQuestions } from '~/interview/server/actions';
import JSONViewer from '@/ui/common/JSONViewer';

type Props = {
  stacks: Stack[];
};

function SelectTechStack({ stacks }: Props) {
	const {
		stackState: { selectedStack, selectedStackType },
		selectStack,
		selectStackType
	} = useStack();

	const [level, setLevel] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [questions, setQuestions] = useState([]);

	const allStacks = useMemo(() => {
		return [...new Set(stacks.map(stack => stack.type))];
	}, [stacks]);

	const stackDetails = useMemo(() => {
		if (selectedStackType) {
			return stacks.filter(stack => stack.type === selectedStackType);
		}
	}, [selectedStackType, stacks]);

	const startInterview = async (retry = false) => {
		try {
			setIsLoading(true);
			const response = await getQuestions(selectedStack, level);
			setQuestions(response as any);
		} catch (error) {
			if (retry) {
				return;
			}
			await startInterview(true);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Container className="py-8">
			<div className="flex flex-col gap-6 my-3">
				<Title className="text-center py-6">
          Select{' '}
					<span className="bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
            Your Stack
					</span>
				</Title>

				<div className="flex gap-4">
					{allStacks.map(stack => (
						<Button
							key={stack}
							color={selectedStackType === stack ? 'primary' : 'default'}
							variant={selectedStackType === stack ? 'shadow' : 'bordered'}
							onClick={() => selectStackType(stack)}
							size="lg"
							className="text-2xl h-unit-16 flex-1"
						>
							{stack}
						</Button>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4">
					{stackDetails &&
            stackDetails.map((tech: Stack) => (
            	<TechDetail
            		onClick={() => selectStack(tech)}
            		hasSelected={selectedStack?.stackName === tech.stackName}
            		key={tech.stackName}
            		tech={tech}
            	/>
            ))}
				</div>

				{selectedStack && (
					<div className="flex justify-between items-center bg-slate-100 rounded-xl p-4 md:p-8">
						<RadioGroup
							label="Select your level"
							orientation="horizontal"
							value={level}
							onValueChange={setLevel}
						>
							<Radio value="EASY">EASY</Radio>
							<Radio value="MEDIUM">MEDIUM</Radio>
							<Radio value="HARD">HARD</Radio>
						</RadioGroup>
						<Button
							variant="shadow"
							color="primary"
							size="lg"
							isDisabled={!level}
							isLoading={isLoading}
							onClick={() => startInterview()}
						>
              Start Interview
						</Button>
					</div>
				)}

				<JSONViewer value={questions} />
			</div>
		</Container>
	);
}

export default SelectTechStack;
