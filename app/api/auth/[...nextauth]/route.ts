import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";

// import { Adapter } from 'next-auth/adapters';

//import type orm adpter from next
import { TypeORMAdapter } from "@auth/typeorm-adapter"
import { Adapter } from 'next-auth/adapters';
import { ConnectionOptions } from 'typeorm';
import { postNewTeacher } from '@/lib/postNewUser';
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
// export { ConnectionOptions } from "./connection/ConnectionOptions";
import { User } from 'next-auth'

interface CustomUser extends User {
  id: string
}


const TypeORMconnection: ConnectionOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "lessons",
  // namingStrategy: new SnakeNamingStrategy()
}


export const authOptions: NextAuthOptions = {
  // session: {
  //   strategy: 'jwt',
  // },
  
  secret: process.env.NEXTAUTH_SECRET,
  adapter: TypeORMAdapter(TypeORMconnection) as Adapter,
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
  // callbacks: {
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token and user id from a provider.
  //     // session.accessToken = token.accessToken
  //     if(session.user){
  //       session.user.id = token.id
  //     }     
  //     return session
  //   }
  // },
  callbacks:{
    // async session({ session, token, user }) {
    //   // Send properties to the client, like an access_token and user id from a provider.
    //   // session.accessToken = token.accessToken
    //   // if(session.user){
    //   //   session.user.id = token.id
    //   // }     
    //   console.log("session", session)
    //   // console.log("token", token)
    //   console.log("user", user)
    //   if(session.user){
    //     // session.user.role = user.role
    //     session.user.id = user.id
    //   }
    //   return {...session, user}
    // }
  },
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    // brandColor: "", // Hex color code
    logo: "@/public/imgs/avatars/1.png", // Absolute URL to image
    // buttonText: "" // Hex color code
  },
  events: {
    async createUser(msg) {
       /* on create user */
      console.log("createUser --- nextauth_route", msg) 

      //  desctrructure msg.user to name, email and image
      // const { name, email, image } = msg.user;
      // await postNewTeacher(
      //   {
      //     teacher: {
      //       name,
      //       email,
      //       image
      //     }

      //   }
      //   )
      // postNewTeacher({teacher: {name:"name", email:"email", image:"image"}})
      await postNewTeacher({teacher: {name:msg.user.name, email:msg.user.email, image:msg.user.image, uuAccountID:msg.user.id}})

      

      
    },
  }

  
  
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };