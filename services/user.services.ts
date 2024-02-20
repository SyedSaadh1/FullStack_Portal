
import crypto from 'crypto'
import type { User as IUser } from "@prisma/client";
import { User } from 'db/user';
import { sendVerificationCode } from 'utils/mail.server';
import type { IUserRegister, IUserVerification } from 'types/user.types';
import Errors from 'contants/error.constants';
import db from 'db';
import HttpService from './http.services';
import ENDPOINTS from '@/contants/api.constants';



class UserService extends HttpService {

  constructor() {
    super(`${ENDPOINTS.USER_ROUTE_PATH}`)
  }

  public async register({ email, name, id }: IUser) {
    try {
      const response = await this.post('/create', { name, email, id });
      const data = response.data;
      await User.updateExternalId(email, data?.user?.id)
      console.log(":: signIn ::", data);
    } catch (error) {
      console.log(":: signIn ERROR ::", error)
    }
  }

  // public static async registerAndGenerateOtp({ email }: IUserRegister) {
  //   const user = await this.register({ email })
  //   // await User.deleteAllToken(user?.id);
  //   const newToken: any = {}; // await User.generateToken(user);

  //   const { id, hashedToken: registerId } = user;
  //   const { emailToken, id: token } = newToken;

  //   await this.sendEmailOtpVerification(user, newToken);

  //   return {
  //     id,
  //     email,
  //     registerId,
  //     token,
  //     emailToken,
  //   };
  // }

  public static async sendEmailOtpVerification({ email }: IUser, { emailToken: code }: any) {
    return await sendVerificationCode({ email, code: code || "" });
  }

  public static async getUserByEmail(email: string) {
    try {
      const { hashedToken, password, ...rest } = await User.getByEmail(email);
      return rest;
    } catch (error) {
      return null
    }
  }

  public static getNewHashToken(): string {
    return crypto.randomBytes(64).toString('hex')
  }

  public static async verifyUserOtp(verificationPayload: IUserVerification) {
    if (!verificationPayload?.registerId) throw new Error(Errors.INVALID_TOKEN);
    const user = await User.getByHashedToken(verificationPayload?.registerId);
    if (!user) throw new Error(Errors.TOKEN_EXPIRED);
    return null; // await User.getVerifyOtpUser(verificationPayload)
  }


  public async getAllUsers() {
    const allUsers = await db.user.findMany({
      select: {
        email: true,
        name: true,
        id: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    return allUsers
  }

}


export default new UserService();

