import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [ GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // Fuerza la selección de cuenta cada vez que se inicia sesión
      authorization: {
        params: {
          prompt: "select_account", 
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Asegúrate de tener esta línea
});

export { handler as GET, handler as POST};