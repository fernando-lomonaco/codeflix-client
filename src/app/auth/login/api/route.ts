import { NextRequest, NextResponse } from 'next/server';
import { loginFormSchema } from '@/app/lib/validations/LoginFormSchema';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = loginFormSchema.parse(await request.json());
    console.log(email, password);
    return new NextResponse('It works');
  } catch (error: any) {
    console.log(error.message);

    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
