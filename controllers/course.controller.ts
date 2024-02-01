import coursesServices from "services/courses.services";
import { Controller } from "./controller";
import { Course } from "types/course.types";

class CourseController extends Controller {

  private publicCourses: Course[] = [];

  constructor() {
    super();
    this.getAllCourses();
  }

  async getAllCourses(request?: Request): Promise<Course[]> {
    try {
      if (this.publicCourses?.length) return this.publicCourses;
      this.publicCourses = await coursesServices.getAllPublicCourses();
      return this.publicCourses;
    } catch (error) {
      console.log(":: ERROR ::", error)
    }

    return [];
  }

  async getCourseDetailById(courseId: string): Promise<Course | undefined> {
    try {
      const allCourses = await this.getAllCourses(); // []
       // introduction-to-web-development-0cfac5f7-b3f6-4246-82d2-12945c40ed39
      const courseIdStrings = courseId.split("-");
      const [...courseIdParts] = courseIdStrings.slice(courseIdStrings.length - 5);
      const id = courseIdParts.join("-");

      return allCourses.find(course => course.id === id);
    } catch (error) {
      console.log(":: ERROR ::", error)
    }
  }

}

export default new CourseController();