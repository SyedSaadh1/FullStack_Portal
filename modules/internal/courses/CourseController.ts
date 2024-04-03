import CourseServices from '@/modules/external/cms/course/CourseServices';

export default class CourseController {
	static async getAllPublicCourses() {
		return await CourseServices.getAllPublicCourse();
	}

	static async getCourseDetails(courseId: string) {
		return await CourseServices.getCourseDetailsByCourseId(courseId);
	}
}
