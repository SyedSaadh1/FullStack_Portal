// import bcrypt from "bcryptjs";
import type { User } from "@prisma/client";
import db from "db";
import { authenticator } from 'otplib';
import crypto from 'crypto'

export const createUser = async (user: any) => {
  // const passwordHash = await bcrypt.hash(user.password, 10);

  const hashedToken = genarateUserHashToken();
  const dbUser = await db.user.upsert({
    where: {
      email: user.email
    },
    update: {
      hashedToken
    },
    create: {
      email: user.email,
      hashedToken
    }
  })

  await db.token.deleteMany({
    where: { userId: dbUser.id }
  });

  const newToken = await db.token.create({
    data: {
      userId: dbUser.id,
      emailToken: genarateUserOtpToken(dbUser),
      expiration: addMinutesToDate(new Date(), 2),
    }
  })


  return {
    id: dbUser?.id,
    email: dbUser?.email,
    registerId: dbUser?.hashedToken,
    token: newToken.id,
    code: newToken.emailToken
  };
};


export const checkIfUserExists = async (email: string) => {
  return await db.user.count({ where: { email } });
}

export const getUserByEmail = async (email: string) => {
  if (await checkIfUserExists(email)) {
    return await db.user.findUnique({
      where: { email },
    });
  }

  return null
}

export const genarateUserOtpToken = (user: User) => {
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
