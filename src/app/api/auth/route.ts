import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'data', 'data.json');

const getUserInData = (data: { email: string; password: string }[], email: string, password: string) => {
  const user = data.some((user) => user.email === email && user.password === password);

  if (user) {
    return user;
  }

  return false;
};

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email e senha são obrigatórios' }, { status: 400 });
    }

    // Lendo o arquivo JSON
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(fileData);

    if (!getUserInData(jsonData, email, password)) {
      return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 });
    }

    const response = NextResponse.json({ message: 'Autenticado com sucesso' });
    response.headers.set('Set-Cookie', 'auth.cookie.pass=true; Path=/; HttpOnly');

    return response;
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
    return NextResponse.json({ message: 'Erro ao processar a requisição' }, { status: 500 });
  }
}
