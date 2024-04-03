import React from 'react';
import Container from '../layout/container';
import Title3 from '@/components/ui/text/Title3';
import { Course } from '@/types/course.types';
import CourseDetailsCard from './CourseDetailsCard';
import { Card, CardBody, Progress } from '@nextui-org/react';

type Props = {
  course: Course;
};

const CourseInfoDetails = ({ course }: Props) => {
	return (
		<Container className="py-8 flex flex-col gap-4">
			<Title3 className="">Table of contents</Title3>

			<Card
				shadow="none"
				className="my-6 bg-gradient-to-br from-foreground-200 to-foreground-50"
			>
				<CardBody className="p-6 flex flex-row items-center gap-8">
					<Progress
						size="sm"
						aria-label="Loading..."
						value={0}
						className="flex-1"
					/>
					<div className="flex flex-col items-center text-xs gap-1 text-balance">
						<span className="w-10 h-10 flex justify-center items-center border rounded-full bg-white">
              0%
						</span>
						<span>Course Progress</span>
					</div>

					<div className="flex flex-col items-center text-xs gap-1 text-balance">
						<span className="w-10 h-10 flex justify-center items-center border rounded-full bg-white">
              0/10
						</span>
						<span>Excercises Completed</span>
					</div>
				</CardBody>
			</Card>

			<CourseDetailsCard course={course} />
		</Container>
	);
};

export default CourseInfoDetails;
