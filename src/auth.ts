import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { CUSTOMER_BY_GOOGLEID } from "./sanity/query";
import { writeClient } from "./sanity/lib/write-client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn(user) {
      const { name, email } = user.user;
      const id = user.profile.sub;

      const existingUser = await client.fetch(CUSTOMER_BY_GOOGLEID, { id });

      if (!existingUser) {
        await writeClient.create({
          _type: "customer",
          googleId: id,
          name,
          email,
          cart: [],
          history: [],
        });
      }

      return true;
    },
    jwt({ token, user, profile }) {
      if (user) {
        // User is available during sign-in

        token.id = profile.sub;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});
