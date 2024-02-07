import React from 'react'
import courseController from "@/controllers/course.controller";

import CourseInfo from '@/ui/courses/CourseInfo';
import CourseInfoDetails from '@/ui/courses/CourseInfoDetails';

export default async function CourseDetails({ params: { courseId } }: any) {
	const course = await courseController.getCourseDetailById(courseId);
	if(!course) return <div>Loading...</div>;
	return (
		<div className="">
			<CourseInfo course={course} />
			<CourseInfoDetails course={course} />
		</div>
	)
}
