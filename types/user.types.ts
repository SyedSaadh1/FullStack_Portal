export type IUserRegister = {
  email: string
}

export type IUserVerification = {
  registerId: string;
  token: string;
  otp: string;
}