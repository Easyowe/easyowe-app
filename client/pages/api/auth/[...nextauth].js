import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from 'lib/mongodb'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.DEV_GITHUB_ID || process.env.GITHUB_ID,
      clientSecret: process.env.DEV_GITHUB_SECRET || process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('info', token, user, account, profile, isNewUser)
      return token
    },
  },
  adapter: MongoDBAdapter(clientPromise),
})
