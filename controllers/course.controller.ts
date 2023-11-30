import coursesServices from "services/courses.services";
import { Controller } from "./controller";
import { Course } from "types/course.types";

class CourseController extends Controller {

  async getAllCourses(request: Request): Promise<Course[]> {

    try {
      return await coursesServices.getAllPublicCourses();
    } catch (error) {
      console.log(":: ERROR ::", error)
    }

    return [];
  }


}

export default new CourseController();