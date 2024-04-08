'use client';
import Title from '@/components/ui/text/Title';
import TechnologyController from '@/modules/internal/interview/technologies/TechnologyController';
import Container from '@/ui/layout/container';
import { Button } from '@nextui-org/react';
import React, { useMemo } from 'react';
import { useStack } from './state/stackReducer';
import TechDetail from './TechDetail';

type Props = {};

function SelectTechStack(_: Props) {
	const allStacks = TechnologyController.getAllStackTypes();
	const {
		stackState: { selectedStack, selectedStackType },
		selectStack,
		selectStackType
	} = useStack();

	const stackDetails = useMemo(() => {
		if (selectedStackType) {
			return TechnologyController.getStackByType(selectedStackType);
		}
	}, [selectedStackType]);

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
            stackDetails.map((tech: any) => (
            	<TechDetail
            		onClick={() => selectStack(tech)}
            		hasSelected={selectedStack?.stack_name === tech.stack_name}
            		key={tech.stack_name}
            		tech={tech}
            	/>
            ))}
				</div>

				<div className="text-right">
					{selectedStack && (
						<Button variant="shadow" color="primary" size="lg">
              Start Interview
						</Button>
					)}
				</div>
			</div>
		</Container>
	);
}

export default SelectTechStack;
