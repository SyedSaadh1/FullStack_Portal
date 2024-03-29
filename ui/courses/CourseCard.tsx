import React from 'react';

import Link from 'next/link';
import { Course } from '@/types/course.types';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

const CourseCard = ({ course }: { course: Course }) => {
	return (
		<Card className="rounded-3xl shadow overflow-hidden relative hover:shadow-lg">
			<CardBody className="p-2">
				<img
					className="w-full h-48 object-cover rounded-2xl"
					src={course.thumbnail?.url}
					alt={course.name}
				/>

				<CardHeader>
					<h2>{course.name}</h2>
					<p className="line-clamp-2">{course.description}</p>
				</CardHeader>
			</CardBody>
			<Link
				className="absolute w-full h-full top-0 left-0"
				href={`/courses/${course.url}`}
			/>
		</Card>
	);
};

export default CourseCard;
