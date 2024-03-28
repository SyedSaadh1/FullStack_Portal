import React from 'react';
import Container from '../layout/container';
import PractiseExerciseTabs from './PractiseExerciseTabs';
import PractiseExerciseTypes from './PractiseExerciseTypes';
import Link from 'next/link';
import challengesController from '@/controllers/challenges.controller';
import { Badge, Card, CardHeader, Input } from '@nextui-org/react';

export default async function PractiseContainer() {
	const exercises = await challengesController.getAll();
	return (
		<div className="bg-white py-8">
			<Container className="flex justify-between">
				<PractiseExerciseTabs />
				<div className="flex gap-4">
					<Input
						placeholder="Search by title"
						className="max-w-[400px] shadow"
					/>
					<PractiseExerciseTypes />
				</div>
			</Container>

			<Container className="mt-5">
				<div className="grid md:grid-cols-3 grid-cols-2 gap-4">
					{exercises.map(topic => (
						<Card key={topic.id}>
							<CardHeader className="">
								<Link href={`/practise/${topic.id}`}>
									<h2 className="flex justify-between">
										<span>{topic.title}</span>
										<Badge color="primary">{topic.type}</Badge>
									</h2>
								</Link>
							</CardHeader>
						</Card>
					))}
				</div>
			</Container>
		</div>
	);
}
