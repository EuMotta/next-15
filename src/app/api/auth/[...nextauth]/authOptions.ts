import { Session, User as typeUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

import api from '../../services/api';

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('Credenciais não fornecidas');
        }

        try {
          const response = await api.post('auth/login', {
            email: credentials.email,
            password: credentials.password
          });

          const user = response.data;

          if (!user || user.error) {
            throw new Error(user?.error || 'Falha ao autenticar');
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email
          };
        } catch (err) {
          console.error('Erro durante a autenticação:', err);
          throw err;
        }
      }
    })
  ],
  session: {
    maxAge: 60 * 60 * 24
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: typeUser }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ token, session }: { token: JWT; session: Session }) {
      if (session?.user && typeof token.id === 'string') {
        session.user.id = token.id;
      }

      return session;
    }
  },
  pages: {
    signIn: '/cadastrar',
    error: '/entrar'
  }
};
