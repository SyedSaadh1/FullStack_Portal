import React from 'react'
import courseController from "@/controllers/course.controller";
import CourseDetailsCard from '@/ui/courses/CourseDetailsCard';
import Container from '@/ui/layout/container';
import Title from '@/components/ui/text/Title';
import { Button } from '@/components/ui/button';

import JSONViewer from '@/ui/common/JSONViewer';


export default async function CourseDetails({ params: { courseId } }: any) {

	const course = await courseController.getCourseDetailById(courseId);

	// style={{backgroundImage: `url(${course?.thumbnail?.url})`}}
	return (
		<div className="">
			<header className='border-b bg-gradient-to-b from-slate-800 to-slate-500 relative z-0 overflow-hidden'>
				<Container className='relative flex gap-32'>
					<div className="flex items-center basis-3/4 py-24">
						<section className="flex-1">
							<Title className='text-white'>{course?.name}</Title>
							<p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-slate-100 w-4/5">
								{course?.description}
							</p>

							<Button variant="secondary" className="mt-8" size="xl">Enroll Now</Button>
						</section>
						{/* <section className="flex justify-end">
							<div className="card w-96 bg-base-100 shadow-xl">
								<figure><img src={course?.thumbnail?.url} alt="Shoes" /></figure>
							</div>
						</section> */}
					</div>
					<aside className='bg-white basis-1/4'>

					</aside>
				</Container>
				<img className="-z-10 blur-xl absolute top-0 left-0 object-cover w-full h-full mix-blend-overlay" src={course?.thumbnail?.url} alt={course?.name} />
			</header>
			<Container>

				<JSONViewer value={course} />

				<div className="flex py-12">
					<div className="flex-1 bg-red-300">
						Aside
					</div>
					<div className="flex-[2_2_0%] px-8 py-4">
						<h3 className="text-3xl border-b-4 py-2 mb-2">Description</h3>
						<p className="text-lg my-4">{course?.description}</p>
						<p className="text-lg my-4">In this course, we'll guide you through this early stage. At the end of the
							course you'll feel very comfortable with {course?.name} and your ability to go on and tackle
							any topic or project.</p>

						<h3 className="text-3xl border-b-4 py-2 mt-2 mb-12">Course Content</h3>

						<CourseDetailsCard />

						<h3 className="text-xl font-medium border-b-4 py-4 mt-4">INSTRUCTOR</h3>
						<p className="text-lg my-4">Syed Zakeer Hussain founded Fullsatck Institute to help bring software development to everyone. Our objective is to help you make software like a professional.
							Multiple members of the Fullstack Institute team worked together to develop this course. We hope you'll enjoy it!</p>
					</div>
				</div>
			</Container>
		</div>
	)
}
