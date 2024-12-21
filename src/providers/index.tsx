'use client';

import { SessionProvider } from 'next-auth/react';

import { ChildrenProps } from '@/@interfaces/global/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const Providers = ({ children }: ChildrenProps) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
