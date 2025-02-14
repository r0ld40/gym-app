import { NextRequest, NextResponse } from 'next/server';

// const loggedIn: boolean = false;

export function middleware(req: NextRequest) {
  const cookie = req.cookies.has('auth.cookie.pass');

  // Verifica se o usuário está autenticado
  if (!cookie) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Middleware será aplicado apenas no /dashboard e subrotas
};
