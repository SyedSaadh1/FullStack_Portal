import type { LoaderFunctionArgs } from "@vercel/remix";

export async function loader({
  request,
}: LoaderFunctionArgs) {

  return {}
}


export default function Dashboard() {
  return (
    <div>Dashboard Main View</div>
  );
}