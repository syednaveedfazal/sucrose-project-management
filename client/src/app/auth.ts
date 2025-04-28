import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [
    GitHub,
    CredentialsProvider({
      id: "myCustomCredentials",
      name: "My Custom Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Partial<Record<"username" | "password", unknown>>
      ) {
        if (
          !credentials ||
          typeof credentials.username !== "string" ||
          typeof credentials.password !== "string"
        ) {
          return null;
        }
        if (!credentials) return null;

        try {
          const res = await fetch("http://localhost:4005/auth/v1/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName: credentials.username,
              password: credentials.password,
            }),
          });

          if (!res.ok) {
            return null;
          }

          const user = await res.json();
          return user;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          name: token.name,
          email: token.email as string,
          id: token.sub as string,
          emailVerified: null,
        };
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});
