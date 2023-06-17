import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'hello' });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('here', body);

  return NextResponse.json(body);
}
