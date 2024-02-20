import { PrismaClient, User } from "@prisma/client";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google"
import HttpService from "@/services/http.services";
import ENDPOINTS from "@/contants/api.constants";
import userServices from "@/services/user.services";


const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  events: {
    signIn: async ({ user }) => {
      const loginUser = user as User;
      if (!loginUser.externalId) {
        userServices.register(user as User)
      }
    },

  }
})

export { handler as GET, handler as POST }