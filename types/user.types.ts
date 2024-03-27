export type IUserRegister = {
  email: string;
};

export type IUserVerification = {
  registerId?: string;
  token?: string;
  otp?: string;
};

export interface IUser {
  id: string;
  email: string;
  name: string;
  isAdmin?: boolean;
  roles?: any[];
}

export interface SelfIntroduction {
  name: string;
  content: string;
}
