import 'next-auth/jwt';
import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
  }
  interface Session {
    user?: User;
  }
}
