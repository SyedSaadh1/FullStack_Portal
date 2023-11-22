// import bcrypt from "bcryptjs";
import type { User as IUser } from "@prisma/client";
import { authenticator } from 'otplib';
import crypto from 'crypto'
import { User } from "db/user";
import UserService from "services/user.services";

export const createUser = async (user: any) => {
  return await UserService.registerAndGenerateOtp(user.email);
};


export const getUserByEmail = async (email: string) => {
  if (await User.isExits(email)) {
    return await User.getByEmail(email);
  }

  return null
}

export const genarateUserOtpToken = (user: IUser) => {
  if (!user.hashedToken) return null;
  authenticator.options = { digits: 6 };
  return authenticator.generate(user.hashedToken);
}


export const genarateUserHashToken = () => {
  return crypto.randomBytes(64).toString('hex')
}

export function addMinutesToDate(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60000);
}
