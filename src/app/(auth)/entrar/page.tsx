'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { AiOutlineLoading } from 'react-icons/ai';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'O email é obrigatório')
    .email('Insira um email válido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres')
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: async ({ email, password }: LoginFormData) => {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      });

      if (result?.error) {
        throw new Error('Email ou senha inválidos');
      }

      return result;
    },
    onSuccess: () => {
      router.push('/dashboard'); // Redireciona após sucesso
    },
    onError: (error: Error) => {
      console.error('Erro ao fazer login:', error.message);
    }
  });

  const onSubmit = (data: LoginFormData) => {
    mutate(data);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm rounded bg-white p-6 shadow-md"
      >
        <h2 className="mb-4 text-center text-2xl font-bold">Login</h2>

        {/* Campo Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            {...register('email')}
            className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isPending}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Campo Senha */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Senha
          </label>
          <input
            id="password"
            type="password"
            placeholder="Sua senha"
            {...register('password')}
            className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isPending}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Mensagem de erro */}
        {error && <p className="mb-4 text-sm text-red-500">{error.message}</p>}

        {/* Botão de Login */}
        <button
          type="submit"
          disabled={isPending}
          className="flex w-full items-center justify-center rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
        >
          {isPending && (
            <AiOutlineLoading className="mr-2 h-4 w-4 animate-spin" />
          )}
          Entrar
        </button>
      </form>
    </div>
  );
}
