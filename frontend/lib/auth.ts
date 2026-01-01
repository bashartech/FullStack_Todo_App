// import { betterAuth } from "better-auth";
// import { jwt } from "better-auth/plugins";
// import { drizzleAdapter } from "better-auth/adapters/drizzle";
// import {schema} from "../db/schema"
// import { nextCookies } from "better-auth/next-js";
// import { db } from "../db/drizzle"; // your drizzle instance
// // Configure Better Auth with JWT token issuance
// export const auth = betterAuth({

//   socialProviders: {
//         google: { 
//             clientId: process.env.GOOGLE_CLIENT_ID as string, 
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
//         }, 
//     },

//   emailAndPassword: {
//     enabled: true,
//     // requireEmailVerification: false, // Set to true in production
//   },
//   // account: {
//   //   accountLinking: {
//   //     enabled: true,
//   //   }
//   // },
//   database: drizzleAdapter(db, {
//         provider: "pg", 
//         schema
//     }),
//   secret: process.env.BETTER_AUTH_SECRET || "fallback_secret_key_change_in_production",
//   plugins: [
//     jwt({
//       enabled: true,
//       // issuer: process.env.BETTER_AUTH_URL || "http://localhost:3000",
//       issuer: process.env.BETTER_AUTH_URL!,
//       maxAge: 7 * 24 * 60 * 60, // 7 days
//     }as any),
//     nextCookies() // Enable JWT token issuance
//   ],
// });


import { betterAuth } from "better-auth"
import { jwt, JwtOptions } from "better-auth/plugins"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"
import { db } from "../db/drizzle"
import { schema } from "../db/schema"

let _auth: ReturnType<typeof betterAuth> | null = null

export function getAuth() {
  if (_auth) return _auth

  const baseURL =
    process.env.BETTER_AUTH_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000")

  _auth = betterAuth({
    baseURL,

    secret:
      process.env.BETTER_AUTH_SECRET ??
      "fallback_secret_key_change_in_production",

    emailAndPassword: {
      enabled: true,
    },

    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      },
    },

    database: drizzleAdapter(db, {
      provider: "pg",
      schema,
    }),

    plugins: [
      jwt({
        enabled: true,
        issuer: baseURL,
        maxAge: 7 * 24 * 60 * 60,
      } as unknown as JwtOptions), // runtime-only usage
      nextCookies(),
    ],
  })

  return _auth
}
