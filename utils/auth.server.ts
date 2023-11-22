import { redirect, json, createCookieSessionStorage } from "@remix-run/node";
import jwt from 'jsonwebtoken';

import db from "db";
import { createUser } from "./user.server";
import { sendVerificationCode } from "./mail.server";
// import bcrypt from "bcryptjs";

const sessionSecret = process.env.SESSION_SECRET || "SECRET";
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

// We need a secret on there server side for the tokens
const { JWT_SIGNATURE = 'JWT_SIGNATURE' } = process.env;

const storage = createCookieSessionStorage({
  cookie: {
    name: "session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});


export async function verify({ otp, registerId, token }: any) {
  const exists = await db.token.count({ where: { id: token } });
  const userExists = await db.user.count({ where: { hashedToken: registerId } });
  if (!exists || !userExists) {
    return json(
      { error: `Token expired`, exists, userExists },
      { status: 400 }
    );
  }

  const dbTokenInstance = await db.token.findUnique({ where: { id: token } });
  const dbUserInstance = await db.user.findUnique({ where: { id: dbTokenInstance?.userId } });
  if (dbTokenInstance?.emailToken == otp && dbUserInstance?.hashedToken == registerId) {
    return createUserSession(dbUserInstance, "/")
  }

  return json(
    { error: `Invalid token`, registerId, token },
    { status: 400 }
  );
}

export async function register(user: any) {

  const newUser = await createUser(user);
  // if (!newUser) {
  //   return json(
  //     {
  //       error: `Something went wrong trying to create a new user.`,
  //       fields: { email: user.email, password: user.password },
  //     },
  //     { status: 400 }
  //   );
  // }
  sendVerificationCode({ email: newUser.email, code: newUser.code || "" });
  const { code, ...rest } = newUser;
  return rest; //createUserSession(newUser, "/");
  // return json(
  //   {
  //     error: `Something went wrong trying to create a new user.`,
  //     fields: { email: user.email, password: user.password },
  //   },
  //   { status: 400 }
  // );
}

// Validate the user on email & password
// export async function login({ email, password }: LoginForm) {
//   const user = await prisma.user.findUnique({
//     where: { email },
//   });

//   if (!user || !(await bcrypt.compare(password, user.password)))
//     return json({ error: `Incorrect login` }, { status: 400 });

//   return createUserSession(user.id, "/");
// }

export async function createUserSession(user: any, redirectTo: string) {
  const session = await storage.getSession();
  const payload = { userId: user.id, email: user.email };
  const token = jwt.sign(payload, JWT_SIGNATURE);

  session.set("token", token);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function requireUser(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const userDetails = await getUserFromToken(request);
  const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);

  if (!userDetails || typeof userDetails !== "object") {
    throw redirect(`/login?${searchParams}`);
  }

  return getUser(request);
}

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getToken(request: Request) {
  const session = await getUserSession(request);
  const token = session.get("token");
  if (!token || typeof token !== "string") return null;
  return token;
}

export async function getUserFromToken(request: Request) {
  const session = await getUserSession(request);
  const token = session.get("token");
  try {
    const user = jwt.verify(token, JWT_SIGNATURE)
    if (!user) return null
    return user;
  } catch (e) {
    return null;
  }
}

export async function getUser(request: Request) {
  const userDetails: any = await getUserFromToken(request);
  if (!userDetails) return null;
  try {
    const user = await db.user.findUnique({
      where: { id: userDetails.userId },
      select: { id: true, email: true, },
    });
    return user;
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}