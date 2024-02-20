import { Controller } from "./controller";

class UserController extends Controller {
  async isAdmin(request: Request): Promise<boolean> {
    return false;
  }

}

export default new UserController();