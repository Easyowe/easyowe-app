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
    jwt: async ({ token, user }) => {
      if (typeof user !== typeof undefined) token.user = user
      return token
    },
    session: async ({ session, user, token }) => {
      session.token = token

      /* have to ignore types due to declaring global user type to interact properly with the data, hence "needs" more args to assign the session.user to user */
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      /* @ts-ignore */
      session.user = user
      return Promise.resolve(session)
    },
  },

  adapter: MongoDBAdapter(clientPromise),
})
