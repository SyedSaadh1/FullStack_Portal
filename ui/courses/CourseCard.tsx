import React from 'react';

import Link from 'next/link';
import { Course } from '@/types/course.types';
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CourseCard = ({ course }: { course: Course }) => {
	console.log(':: COURSE ::', course);

	return (
		<Card isHoverable>
			<CardBody className="overflow-visible p-0">
				<Image
					shadow="sm"
					radius="lg"
					width="100%"
					alt={course.name}
					className="w-full object-cover h-[240px]"
					src={course.thumbnail?.url}
				/>
			</CardBody>
			<CardFooter className="flex-col items-start text-left gap-2 p-4">
				<h2 className="text-xl font-bold">{course.name}</h2>
				<p className="text-default-500 line-clamp-2">
					{course.shortDescription}
				</p>

				<Link className="mt-4 mb-4" href={`/courses/${course?.id}`}>
					<Button
						variant="ghost"
						color="primary"
						endContent={<ArrowRightIcon className="w-4" />}
					>
            Details{' '}
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
};

export default CourseCard;
