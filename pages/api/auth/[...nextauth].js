import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_API_ID,
      clientSecret: process.env.GOOGLE_API_SECRET,
    }),
    // ...add more providers here
  ],
})
