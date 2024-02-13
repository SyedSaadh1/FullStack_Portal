import { authenticator } from 'otplib';
import type { User as IUser } from "@prisma/client";
import db from "db";
import type { IUserVerification, IUser as UserType } from 'types/user.types';
import USER from 'contants/user.constants';

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

  public static async isAdminUser(user: UserType): Promise<boolean> {
    const adminRolesCount = await db.user.count({
      where: {
        id: user.id,
        roles: {
          some: {
            role: {
              name: USER.IS_ADMIN
            }
          }
        }
      }
    });
    return adminRolesCount > 0;
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
}