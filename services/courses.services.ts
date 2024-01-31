import { Course } from "types/course.types";
import HttpService from "./http.services";
import { AxiosResponse } from 'axios'
import ENDPOINTS from "contants/api.constants";

class CoursesService extends HttpService {

  constructor(endpoint: string = ENDPOINTS.CMS_REST_ENDPOINT) {
    super(`${endpoint}`);
  }

  public async getAllPublicCourses(): Promise<Course[]> {
    console.log("Calling getAllPublicCourses...")
    const response: AxiosResponse<Course[]> = await this.get('/courses');
    return (response.data || []).map(this.mapImages)
  }


  private mapImages(course: Course) {
    let { thumbnail, banner } = course;
    if (thumbnail && thumbnail?.url) {
      thumbnail.url = `${ENDPOINTS.CMS_ENDPOINT}${thumbnail.url}`
    }

    if (banner && banner?.url) {
      banner.url = `${ENDPOINTS.CMS_ENDPOINT}${banner.url}`
    }
    return {
      ...course,
      thumbnail,
    }
  }



}

export default new CoursesService(ENDPOINTS.CMS_REST_ENDPOINT);

