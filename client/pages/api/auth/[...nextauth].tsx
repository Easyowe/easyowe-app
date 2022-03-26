import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

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
})
