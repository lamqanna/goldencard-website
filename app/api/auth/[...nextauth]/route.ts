import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Chỉ cho phép 2 email của bạn
      const allowedEmails = [
        "anhlq11002@gmail.com",
        "lamqanna@gmail.com"
      ]
      
      if (user.email && allowedEmails.includes(user.email)) {
        return true
      }
      return false // Từ chối login
    },
    async session({ session, token }) {
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handlers as GET, handlers as POST }
