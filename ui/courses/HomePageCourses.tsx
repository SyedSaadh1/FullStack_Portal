import React from 'react';
import Container from '../layout/container';
import CourseCardCarousel from './CourseCardCarousel';
import CourseController from '@/modules/internal/courses/CourseController';

const HomePageCourses = async () => {
	const courses = await CourseController.getAllPublicCourses();
	return (
		<section className="py-8">
			<Container>
				<CourseCardCarousel courses={courses} />
			</Container>
		</section>
	);
};

export default HomePageCourses;
