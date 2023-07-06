import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";




export const authOptions: NextAuthOptions = {
  // session: {
  //   strategy: 'jwt',
  // },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID!,
    //   clientSecret: process.env.GITHUB_SECRET!,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID! as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! as string,
    }),
  //   CredentialsProvider({
  //     name: 'as Guest',
  //     credentials: {},
  //     async authorize(credentials) {
  //       const user = {
  //         id: Math.random().toString(),
  //         name: 'Guest',
  //         email: 'guest@example.com',
  //       };
  //       return user;
  //     },
  //   }),
  // ],
  // callbacks: {
  //   async signIn({ user }) {
  //     // block signin if necessary
  //     return true;
  //   }
  // },
  ],
  callbacks: {
    // async signIn({ account, profile }) {
    //   if (account?.provider === "google") {
    //     return profile?.email_verified && profile?.email!.endsWith("@example.com")
    //   }
    //   return true // Do different verification for other providers that don't have `email_verified`
    // },
  },
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    // brandColor: "", // Hex color code
    logo: "http://localhost:3000/public/imgs/avatars/1.png", // Absolute URL to image
    // buttonText: "" // Hex color code
  }
  
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };