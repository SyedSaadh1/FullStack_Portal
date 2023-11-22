import { redirect, json } from "@remix-run/node";
import Errors from "contants/error.constants";


import SessionService from "services/session.services";
import UserService from "services/user.services";
import type { IUserVerification } from "types/user.types";

export async function verify(verificationPayload: IUserVerification) {

  try {
    const user = await UserService.verifyUserOtp(verificationPayload);
    if (!user) throw new Error(Errors.INVALID_TOKEN);

    return await SessionService.createUserSession(user, "/");

  } catch (error: any) {
    const { registerId, token } = verificationPayload;
    let returnPayload = {};

    if (error.name === Errors.INVALID_TOKEN) {
      returnPayload = { registerId, token }
    }

    return json(
      { error: error.message, ...returnPayload },
      { status: 400 }
    );
  }
}

export async function register(user: any) {
  try {
    const { email, emailToken: code, ...rest } = await UserService.registerAndGenerateOtp({ email: user.email });
    return rest;
  } catch (e: any) {
    return json(
      {
        error: e.message || `Something went wrong trying to create a new user.`,
        fields: { email: user.email, password: user.password },
      },
      { status: 400 }
    );
  }
}



export async function requireUser(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const user = await getUser(request);
  const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);

  if (!user || typeof user !== "object") {
    throw redirect(`/login?${searchParams}`);
  }

  return getUser(request);
}



export async function getUser(request: Request) {
  try {
    return await SessionService.getUser(request);
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request) {
  return redirect("/login", {
    headers: {
      "Set-Cookie": await SessionService.clearSession(request),
    },
  });
}