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
      this.publicCourses =  await coursesServices.getAllPublicCourses();
      return this.publicCourses;
    } catch (error) {
      console.log(":: ERROR ::", error)
    }

    return [];
  }


}

export default new CourseController();