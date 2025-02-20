import Title from '@/components/ui/text/Title';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Stack } from '@prisma/client';
import React from 'react';

type Props = {
  tech: Stack;
  onClick: any;
  hasSelected?: boolean;
};

function TechDetail({ tech, onClick, hasSelected }: Props) {
	return (
		<Card
			className={`p-4 md:p-6 cursor-pointer ${
				hasSelected ? 'border-1 border-primary' : 'shadow-inner border'
			}`}
			onClick={onClick}
			shadow={hasSelected ? 'lg' : 'sm'}
			isPressable={!hasSelected}
			disableRipple
		>
			<CardHeader>
				<Title className="w-full text-left text-3xl">{tech?.stackName}</Title>
			</CardHeader>
			<CardBody>
				<p className="text-xl text-muted-foreground">{tech?.description}</p>
			</CardBody>
		</Card>
	);
}

export default TechDetail;
