import React, { useEffect } from 'react';
import { type ActionFunctionArgs } from "@vercel/remix";
import { useSubmit } from "@remix-run/react";

import { logout } from "utils/auth.server";

export async function action({
  request,
}: ActionFunctionArgs) {
  return logout(request);
}


export default function Logout() {
  const submit = useSubmit();
  useEffect(() => {
    submit({}, { action: "/logout", method: "post" });
  }, [submit]);

  return <div>Logout...</div>
}