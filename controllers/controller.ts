import { User } from "db/user";
import SessionService from "services/session.services";
import type { IUser } from "types/user.types";

export class Controller {

  async getUser(request: Request) {
    let user: IUser | null = null;
    try {
      user = await SessionService.getUser(request);
      if (user) {
        user.isAdmin = (await User.isAdminUser(user)) || user.email === "zakeer@zakeer.me";
      }
    } catch (error) {
      console.log(error);
    }
    return user;
  }
}
