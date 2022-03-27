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
      profile(profile) {
        return {
          id: profile.id,
          username: profile.name || profile.login,
          email: profile.email,
          profileImage: profile.avatar_url,
        }
      },
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/signin',
  },
  events: {
    signIn({ user }) {
      console.log(user)
    },
  },
  callbacks: {
    jwt: async ({ token, user, isNewUser }) => {
      console.log('USER', user)
      if (typeof user !== typeof undefined) token.user = user
      return token
    },
    session: async ({ user, token, user }) => {
      session.accessToken = token.accessToken
      session.user = user
      return session
    },
  },

  adapter: MongoDBAdapter(clientPromise),
})
