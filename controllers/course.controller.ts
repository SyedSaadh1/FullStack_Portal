import coursesServices from 'services/courses.services';
import { Controller } from './controller';
import { Course } from 'types/course.types';

import html from '@/curriculum/html.json';
import css from '@/curriculum/css.json';
import javascript from '@/curriculum/javascript-redefine.json';

class CourseController extends Controller {
	private mockCourses = [html, css, javascript[0]].map(course => ({
		...course,
		id: course.title.toLowerCase().split(' ').join('-'),
		name: course.title,
		isPublic: true,
		url: course.title.toLowerCase().split(' ').join('-')
	}));

	private publicCourses: Course[] = []; //[this].mockCourses;

	constructor() {
		super();
	}

	async getAllCourses(): Promise<Course[]> {
		try {
			// if (this.publicCourses?.length) return this.publicCourses;
			this.publicCourses = await coursesServices.getAllPublicCourses();
			return this.publicCourses;
		} catch (error) {
			console.log(':: ERROR ::', error);
		}

		return [];
	}

	async getCourseDetailById(courseId: string): Promise<Course | undefined> {
		try {
			const allCourses = await this.getAllCourses(); // []
			// introduction-to-web-development-0cfac5f7-b3f6-4246-82d2-12945c40ed39
			const courseIdStrings = courseId.split('-');
			const [...courseIdParts] = courseIdStrings.slice(
				courseIdStrings.length - 5
			);
			const id = courseIdParts.join('-');
			console.log(':: ID ::', id);

			return allCourses.find(
				course => course.id === id || course.url?.includes(id)
			);
		} catch (error) {
			console.log(':: ERROR ::', error);
		}
	}
}

const instance = new CourseController();

export default instance;
