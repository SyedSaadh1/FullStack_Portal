import { Course } from 'types/course.types';
import HttpService from './http.services';
import { AxiosResponse } from 'axios';
import ENDPOINTS from 'contants/api.constants';

class CoursesService extends HttpService {
	constructor(endpoint: string = ENDPOINTS.CMS_REST_ENDPOINT) {
		super(`${endpoint}`);
	}

	public async getAllPublicCourses(): Promise<Course[]> {
		console.log('Calling getAllPublicCourses...');
		const response: AxiosResponse<{ status: boolean; courses: Course[] }> =
      await this.get('/courses');
		const courses = response.data?.courses || [];
		return (courses || []).map(this.mapImages);
	}

	private mapImages = (course: Course) => {
		let { thumbnail, banner } = course;
		if (thumbnail && thumbnail?.url) {
			thumbnail.url = `${ENDPOINTS.CMS_ENDPOINT}${thumbnail.url}`;
		}

		if (banner && banner?.url) {
			banner.url = `${ENDPOINTS.CMS_ENDPOINT}${banner.url}`;
		}
		const url = this.generateCourseUrl(course);
		return {
			...course,
			url,
			thumbnail
		};
	};

	private generateCourseUrl = (course: Course): string => {
		let { id, name } = course;
		const url = `${name.toLowerCase().replaceAll(' ', '-')}-${id}`;
		return url;
	};
}

const coursesServices = new CoursesService(ENDPOINTS.CMS_REST_ENDPOINT);

export default coursesServices;
