'use client';

import * as React from 'react';
import { Card, CardBody, CardFooter } from '@nextui-org/react';

import { Course } from '@/types/course.types';

type Props = {
  course: Course;
};

export default function CourseDetailsCard({ course }: Props) {
	if (!course) return <div>Loading...</div>;

	return (
		<section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{course?.lessons?.map(lesson => (
				<Card
					key={lesson?.id}
					className="bg-gradient-to-br from-content1 to-default-100/50"
				>
					<CardBody className="p-6">
						<h2 className="bg-gradient-to-br from-foreground-800 to-foreground-500 bg-clip-text text-xl font-semibold tracking-tight text-transparent dark:to-foreground-200 w-3/5">
							{lesson?.name}
						</h2>
					</CardBody>
					<CardFooter className="gap-1 flex-col items-stretch w-full justify-start color-inherit subpixel-antialiased bg-content1 p-6 py-4 border-t-1 border-default-100">
						{lesson?.topics?.map((topic, idx) => (
							<div key={idx} className={`py-1 ${idx > 0 ? 'border-t' : ''}`}>
								<p className="font-mono tracking-tight text-sm text-default-600 line-clamp-1">
                  • {topic?.title}
								</p>
							</div>
						))}
					</CardFooter>
				</Card>
			))}
		</section>
	);
}
