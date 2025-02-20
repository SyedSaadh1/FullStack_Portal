import React from 'react';
import Container from '../layout/container';
import { Course } from '@/types/course.types';
import { Button } from '@nextui-org/react';
type Props = {
  course: Course;
};

function CourseInfo({ course }: Props) {
	return (
		<section className="bg-slate-100 shadow-inner">
			<Container className="py-6 text-center max-w-screen-xl">
				<h3 className="text-5xl font-bold text-center py-8 p-4 border-b-2 border-dashed border-gray-300">
					{course?.name}
				</h3>

				<div className="py-10 border-b-2 border-dashed border-gray-300">
					<p className="max-w-4xl mx-auto text-xl">
						{course?.shortDescription}
					</p>
				</div>

				<div className="grid grid-cols-3">
					<div />
					<div className="flex gap-2 py-10 px-5 border-x-2 border-dashed border-gray-300">
						<Button
							size="lg"
							className="flex-1 max-w-4xl font-bold"
							variant="ghost"
						>
              Table of Contents
						</Button>
						<Button
							size="lg"
							className="flex-1 max-w-4xl font-bold"
							variant="shadow"
							color="primary"
						>
              Enroll now
						</Button>
					</div>
					<div />
				</div>
			</Container>
		</section>
	);
}
export default CourseInfo;
