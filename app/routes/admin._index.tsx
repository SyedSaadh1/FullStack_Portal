import { useNavigate } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@vercel/remix";
import { useEffect } from "react";

export async function loader({
  request,
}: LoaderFunctionArgs) {

  return {}
}


export default function Index() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('dashboard');
  }, [navigate])
  return (
    <></>
  );
}