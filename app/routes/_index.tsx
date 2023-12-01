import type { MetaFunction, LoaderFunctionArgs } from "@vercel/remix";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useLoaderData } from "@remix-run/react";
import { getUser } from "utils/auth.server";
import { CodeViewer } from "../components/editor/CodeViewer";
import courseController from "controllers/course.controller";
import { Course } from "types/course.types";
import CourseListing from "~/components/courses/CourseListing";

export const meta: MetaFunction = () => {
  return [
    { title: "FUllstack Institute - Full Stack Development Program – Master Web Technologies" },
    { name: "description", content: "Accelerate your career with our comprehensive Full Stack Development Program. Learn Web Development, Advanced HTML/CSS/JavaScript, ReactJS, and more" },
    { name: "keywords", content: "Full Stack Development, Web Development Training, HTML5, CSS3, JavaScript, ReactJS, Material UI, Advanced Web Programming, Career in Tech, Coding Bootcamp" }
  ];
};

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const token = await getUser(request);
  const courses: Course[] = await courseController.getAllCourses(request);
  return { token, courses }
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <div className="py-16 container mx-auto">

        <CourseListing courses={data?.courses || []} />

        {/* <CodeViewer code={JSON.stringify({ data }, null, 2)} language="js" />
        <PanelGroup direction="horizontal">
          <Panel defaultSizePercentage={30} minSizePercentage={20}>
            left
          </Panel>
          <PanelResizeHandle className="w-2 px-2 bg-gray-100" />
          <Panel minSizePercentage={30}>
            <CodeEditor />
          </Panel>
          <PanelResizeHandle />
        </PanelGroup> */}

        {/* <TiptapEditor /> */}
      </div>
    </>
  );
}
