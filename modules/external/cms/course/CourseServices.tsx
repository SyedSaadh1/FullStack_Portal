import cmsApiServices from '../CMSApiServices';
import COURSE_ENDPOINTS from './course.endpoints';
import { Course } from './course.types';

export default class CourseServices {
	static async getAllPublicCourse(): Promise<Course[]> {
		try {
			const response = await cmsApiServices.get(
				COURSE_ENDPOINTS.GET_ALL_PUBLIC_COURSES
			);
			return response.data?.courses;
		} catch (error) {
			console.log(error);
		}
		return [];
	}

	static async getCourseDetailsByCourseId(
		courseId: string
	): Promise<Course | null> {
		try {
			const response = await cmsApiServices.get(
				`${COURSE_ENDPOINTS.GET_COURSE_BY_ID}/${courseId}`
			);
			return response.data?.course;
		} catch (error) {
			console.log(error);
		}
		return null;
	}
}
