import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { query as q } from 'faunadb'
import { fauna } from '../../../services/fauna'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email))) // condition
            ),
            q.Create(q.Collection('users'), { data: { email } }), // if condition pass
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email))) // else
          )
        )

        return true
      } catch {
        return false
      }
    }
  }
})
