import { type ActionFunctionArgs } from "@vercel/remix";

import { verify } from "utils/auth.server";

export async function action({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  const otp = formData.get("otp");
  const registerId = formData.get("registerId");
  const token = formData.get("token");
  return verify({ otp, registerId, token });
}

