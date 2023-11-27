import { Outlet } from "@remix-run/react";
import { redirect, type LoaderFunctionArgs } from "@vercel/remix";
import Sidebar from "./sidebar";
import { requireUser } from "utils/auth.server";
import userController from "controllers/user.controller";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  await requireUser(request);
  const user = await userController.getUser(request);
  if (!user?.isAdmin) return redirect('/');
  return {}
}


export default function Admin() {
  return (
    <div>
      <section className="container mx-auto flex flex-col py-6 gap-6 md:flex-row ">
        <Sidebar />
        <section className="flex-1">
          <Outlet />
        </section>
      </section>
    </div>
  );
}