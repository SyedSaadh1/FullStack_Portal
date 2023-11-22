
import crypto from 'crypto'
import type { User as IUser, Token } from "@prisma/client";
import { User } from 'db/user';
import { sendVerificationCode } from 'utils/mail.server';
import type { IUserRegister, IUserVerification } from 'types/user.types';
import Errors from 'contants/error.constants';



export default class UserService {

  public static async register({ email }: IUserRegister) {
    const hashedToken = this.getNewHashToken();
    const user = await User.createOrUpdate({ email, hashedToken });
    return user;
  }

  public static async registerAndGenerateOtp({ email }: IUserRegister) {
    const user = await this.register({ email })
    await User.deleteAllToken(user?.id);
    const newToken = await User.generateToken(user);

    const { id, hashedToken: registerId } = user;
    const { emailToken, id: token } = newToken;

    await this.sendEmailOtpVerification(user, newToken);

    return {
      id,
      email,
      registerId,
      token,
      emailToken,
    };
  }

  public static async sendEmailOtpVerification({ email }: IUser, { emailToken: code }: Token) {
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
    const user = await User.getByHashedToken(verificationPayload?.registerId);
    if (!user) throw new Error(Errors.TOKEN_EXPIRED);
    return await User.getVerifyOtpUser(verificationPayload)
  }

}

