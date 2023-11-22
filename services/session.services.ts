import type { User as IUser } from "@prisma/client";
import jwt from 'jsonwebtoken';
import { redirect, createCookieSessionStorage } from "@remix-run/node";
import SESSION from "contants/session.constants";
import HEADERS from "contants/headers.constants";
import UserService from "./user.services";

// We need a secret on there server side for the tokens
const {
  JWT_SIGNATURE = 'CpFhQ8FbYw3mVRIpOv6CAojiZTk2WCkb',
  SESSION_SECRET = 'yPMmWEKnmsFLm9X7iGR6gi7mus1Qry6z'
} = process.env;

export default class SessionService {
  static storage = createCookieSessionStorage({
    cookie: {
      name: SESSION.NAME,
      secure: process.env.NODE_ENV === "production",
      secrets: [SESSION_SECRET],
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
    },
  });

  public static async createUserSession(user: IUser, redirectTo: string) {
    const session = await this.storage.getSession();
    const payload = { userId: user.id, email: user.email };
    const token = jwt.sign(payload, JWT_SIGNATURE);

    session.set(SESSION.TOKEN, token);
    return redirect(redirectTo, {
      headers: {
        "Set-Cookie": await this.storage.commitSession(session),
      },
    });
  }

  public static async getSession(request: Request) {
    return await this.storage.getSession(
      request.headers.get(HEADERS.COOKIE)
    );
  }

  public static async getTokenFromSession(request: Request) {
    return (await this.getSession(request))
      .get(SESSION.TOKEN);
  }

  public static async getUserDetails(request: Request) {
    const token = await this.getTokenFromSession(request);
    try {
      const user = jwt.verify(token, JWT_SIGNATURE)
      if (!user) return null
      return user;
    } catch (e) {
      return null;
    }
  }

  public static async getUser(request: Request) {
    const userInfo: any = await this.getUserDetails(request);
    if (!userInfo) return null;
    return await UserService.getUserByEmail(userInfo?.email)
  }

  public static async clearSession(request: Request) {
    return await this.storage.destroySession(
      await this.getSession(request)
    );
  }
}
