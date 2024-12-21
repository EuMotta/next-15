import { NextResponse } from 'next/server';

export async function POST() {
  const user = {
    id: '12345',
    nome: 'John Doe',
    tipo: 'admin',
    email: 'john.doe@example.com',
    status: true
  };
  return NextResponse.json(user, { status: 200 });
}
