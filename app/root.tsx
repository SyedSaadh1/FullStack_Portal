import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction } from "@vercel/remix";

import tailwindCssStylesheet from "~/tailwind.css";
import { PortalHeader } from "./components/layout/PortalHeader";
import userController from "controllers/user.controller";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindCssStylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];


export async function loader({
  request,
}: {
  request: Request;
}) {

  const user = await userController.getUser(request);
  return {
    user,
  }
}

export default function App() {
  const { user } = useLoaderData<typeof loader>();
  return (
    <html lang="en" className="min-h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-full bg-gray-50">
        <PortalHeader user={user} />
        <main className="px-4">
          <Outlet context={{ user }} />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
