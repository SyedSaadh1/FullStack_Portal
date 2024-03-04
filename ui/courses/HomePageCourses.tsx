import React from 'react';
import Container from '../layout/container';
import courseController from '@/controllers/course.controller';
import { Course } from '@/types/course.types';
import CourseCardCarousel from './CourseCardCarousel';

const HomePageCourses = async () => {
	const courses: Course[] = JSON.parse(
		JSON.stringify(await courseController.getAllCourses())
	);

	return (
		<section className="py-8">
			<Container>
				<CourseCardCarousel courses={courses} />
			</Container>
		</section>
	);
};

export default HomePageCourses;
