import React from 'react';

import CourseInfo from '@/ui/courses/CourseInfo';
import CourseInfoDetails from '@/ui/courses/CourseInfoDetails';
import CourseController from '@/modules/internal/courses/CourseController';

export default async function CourseDetails({ params: { courseId } }: any) {
	const course = await CourseController.getCourseDetails(courseId);
	if (!course) return <div>Loading...</div>;
	return (
		<div>
			<CourseInfo course={course} />
			<CourseInfoDetails course={course} />
		</div>
	);
}
