import NextAuth from "next-auth/next";
import GithubProviderProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProviderProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
