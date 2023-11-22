import nodemailer from 'nodemailer';

const gmailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_SECRET
  }
});


const getVerificationMailOptions = (toEmail: string, verificationCode: string) => {
  return {
    from: 'verify@fullstack.institute',
    to: toEmail,
    subject: 'Fullstack Institute Verification code',
    text: `Your verification code for loggin Fullstack.Institute is ${verificationCode} `
  }
}

interface SendVerificationCodePayload {
  email: string;
  code: string;
}

export const sendVerificationCode = async ({ email, code }: SendVerificationCodePayload) => {
  try {
    const mailOptions = getVerificationMailOptions(email, code);
    const response = await gmailTransporter.sendMail(mailOptions);
    return response;
  } catch (error: any) {
    throw new Error(error?.message)
  }
} 