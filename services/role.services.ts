import Errors from "contants/error.constants";
import { Role } from "db/role";


export default class RoleService {

  public static async getAllRoles() {
    return await Role.getAllRoles();
  }

  public static async addNewRole(roleName: string) {
    const isAlreadyExists = await Role.isAlreadyExists(roleName);
    if (isAlreadyExists) {
      throw new Error(Errors.ROLE_ALREADY_EXIST)
    }
    return await Role.create(roleName);
  }

}

