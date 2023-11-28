import { useFetcher, useLoaderData } from "@remix-run/react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@vercel/remix";
import roleController from "controllers/role.controller";
import { CodeViewer } from "~/components/editor/CodeViewer";
import DashboardView from "./admin/dashboard.view";
import RolesList from "~/components/roles/RolesList";
import { AddRoleForm } from "~/components/roles/AddRoleForm";
import ROLE from "contants/role.constants";
import { IRole } from "types/role.types";

export async function loader({
  request,
  params
}: LoaderFunctionArgs) {
  const roleName = params.role;
  const role: IRole = await roleController.getRoleByName(String(roleName));
  return { role }
}


export default function AdminRoleDashboard() {
  const { role } = useLoaderData<typeof loader>();





  return (
    <DashboardView
      title={`${role?.name}`}
      subTitle={`See information about all ${role?.name}`}
    >
      {/* <RolesList roles={roles} /> */}
    </DashboardView>

  );
}

export async function action({
  request,
}: ActionFunctionArgs) {

  return roleController.addNewRole(request)
}