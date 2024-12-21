import zod from 'zod';

const envSchema = zod.object({
  FULL_URL: zod.string().min(1),
  NEXTAUTH_SECRET: zod.string().min(1),
  API_URL: zod.string().min(1)
});

export const env = envSchema.parse(process.env);
