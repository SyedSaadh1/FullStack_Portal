import UserService from "services/user.services";
import { Controller } from "./controller";
import type { IUser } from "types/user.types";

class UserController extends Controller {
  async isAdmin(request: Request): Promise<boolean> {

    return false;
  }

  async getAllUser(request: Request): Promise<IUser[]> {

    try {
      const users: any = await UserService.getAllUsers();
      return users;
    } catch (error) {

    }

    return [];
  }

}

export default new UserController();