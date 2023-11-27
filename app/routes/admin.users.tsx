import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@vercel/remix";
import userController from "controllers/user.controller";
// import { CodeViewer } from "~/components/editor/CodeViewer";
import UserCard from "~/components/users/UserCard";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const loggedInUser = await userController.getUser(request);
  const users = await userController.getAllUser(request);
  return { users, loggedInUser }
}


export default function Dashboard() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <div>Users</div>
      {/* <CodeViewer code={JSON.stringify(data, null, 2)} language="js" /> */}
      <section className="mt-4 grid md:grid-cols-2 grid-cols-1 gap-4">
        {data?.users?.map(user => <UserCard user={user} key={user.id} />)}
      </section>
    </>
  );
}