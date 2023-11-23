import type { MetaFunction, LoaderFunctionArgs } from "@vercel/remix";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useLoaderData } from "@remix-run/react";
import { getUser } from "utils/auth.server";
import { CodeViewer } from "../components/editor/CodeViewer";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const token = await getUser(request);
  return { token }
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <div className="py-16 container mx-auto">
        <CodeViewer code={JSON.stringify({ data }, null, 2)} language="js" />
        <PanelGroup direction="horizontal">
          <Panel defaultSizePercentage={30} minSizePercentage={20}>
            left
          </Panel>
          <PanelResizeHandle className="w-2 px-2 bg-gray-100" />
          <Panel minSizePercentage={30}>
            {/* <CodeEditor /> */}
          </Panel>
          <PanelResizeHandle />
        </PanelGroup>

        {/* <TiptapEditor /> */}
      </div>
    </>
  );
}
