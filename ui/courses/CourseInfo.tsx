import React from 'react';
import Container from '../layout/container';
import { Course } from '@/types/course.types';
import Title from '@/components/ui/text/Title';
import { Button } from '@nextui-org/react';
type Props = {
  course: Course;
};

function CourseInfo({ course }: Props) {
	return (
		<header className="border-b bg-gradient-to-b from-slate-800 to-slate-500 relative z-0 overflow-hidden">
			<Container className="relative flex gap-32">
				<div className="flex items-center basis-3/4 py-24">
					<section className="flex-1">
						<Title className="text-white">{course?.name}</Title>
						<p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-slate-100 w-4/5">
							{course?.description}
						</p>

						<Button variant="solid" className="mt-8" size="lg">
              Enroll Now
						</Button>
					</section>
				</div>
				{/* <aside className='bg-white basis-1/4'>
        </aside> */}
			</Container>
			<img
				className="-z-10 blur-xl absolute top-0 left-0 object-cover w-full h-full mix-blend-overlay"
				src={course?.thumbnail?.url}
				alt={course?.name}
			/>
		</header>
	);
}
export default CourseInfo;
