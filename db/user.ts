import { authenticator } from 'otplib';
import type { User as IUser } from "@prisma/client";
import db from "db";
import type { IUserVerification } from 'types/user.types';

interface ICreateOrUpdateUser {
  email: string;
  hashedToken?: string;
}

export class User {
  instance: IUser;

  constructor(user: IUser) {
    this.instance = user
  }

  public static async getByEmail(email: string): Promise<IUser> {
    return await db.user.findUniqueOrThrow({
      where: {
        email
      }
    })
  }

  public static async isExits(email: string): Promise<boolean> {
    return (await db.user.count({ where: { email } })) > 0
  }

  public static async getByHashedToken(hashedToken: string) {
    return await db.user.findFirstOrThrow({ where: { hashedToken } });
  }

  public static async createOrUpdate({ email, hashedToken }: ICreateOrUpdateUser): Promise<IUser> {
    const user = await db.user.upsert({
      where: {
        email
      },
      update: {
        hashedToken
      },
      create: {
        email,
        hashedToken
      }
    })
    return user;
  }

  public static async generateToken(user: IUser) {
    if (!user?.hashedToken) throw new Error("User Hash token is required");

    authenticator.options = { digits: 6 };
    const otpCode = authenticator.generate(user.hashedToken);

    const token = await db.token.create({
      data: {
        userId: user.id,
        emailToken: otpCode,
        expiration: new Date(Date.now() + 2 * 60 * 1000)
      }
    });
    return token;
  }

  public static async deleteAllToken(userId: string) {
    return await db.token.deleteMany({
      where: { userId }
    });
  }

  public static async getVerifyOtpUser({ otp, token, registerId }: IUserVerification) {
    return await db.user.findFirstOrThrow({
      where: {
        hashedToken: registerId,
        tokens: {
          some: {
            emailToken: otp,
            id: token
          }
        }
      },
    })
  }
}