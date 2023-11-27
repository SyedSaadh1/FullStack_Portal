import { useFetcher, useLoaderData } from "@remix-run/react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@vercel/remix";
import roleController from "controllers/role.controller";
// import { CodeViewer } from "~/components/editor/CodeViewer";
import DashboardView from "./admin/dashboard.view";
import RolesList from "~/components/roles/RolesList";
import { AddRoleForm } from "~/components/roles/AddRoleForm";
import ROLE from "contants/role.constants";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const roles = await roleController.getAllRoles(request);
  return { roles }
}


export default function AdminRoleDashboard() {
  const fetcher = useFetcher({ key: ROLE.ROLE });
  const { roles = [] } = useLoaderData<typeof loader>();


  const handleAdd = (roleName: string) => {
    fetcher.submit({ roleName }, { action: '.', method: 'post' })
  };


  return (
    <>
      {/* <CodeViewer code={fetcher} language="js" /> */}

      <DashboardView
        title="Roles List"
        subTitle="See information about all roles"
        headerForm={<AddRoleForm onAdd={handleAdd} isSubmitting={fetcher.state === "submitting"} />}
      >
        <RolesList roles={roles} />
      </DashboardView>
    </>

  );
}

export async function action({
  request,
}: ActionFunctionArgs) {

  return roleController.addNewRole(request)
}