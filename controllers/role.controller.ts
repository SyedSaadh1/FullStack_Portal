import { IRole } from "types/role.types";
import { Controller } from "./controller";
import RoleService from "services/role.services";
import { json } from "@vercel/remix";
import Errors from "contants/error.constants";

class RoleController extends Controller {

  async getAllRoles(request: Request): Promise<IRole[]> {

    try {
      const roles = await RoleService.getAllRoles();
      return roles;
    } catch (error) {

    }

    return [];
  }

  async addNewRole(request: Request): Promise<any> {
    try {
      const formData = await request.formData();
      const roleName = formData.get("roleName");
      if (!roleName) return json({ error: Errors.ROLE_IS_REQUIRED }, 400)
      return await RoleService.addNewRole(roleName.toString());
    } catch (error: any) {
      return json({ error: error.message }, 400)
    }

  }

}

export default new RoleController();