import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@vercel/remix";
import courseController from "controllers/course.controller";
import { CodeViewer } from "~/components/editor/CodeViewer";

export async function loader({
  request,
}: LoaderFunctionArgs) {

  const courses = await courseController.getAllCourses(request);

  return { courses }
}


export default function Dashboard() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      Dashboard Courses
      <CodeViewer code={data} language="js" />
    </div>
  );
}