import { saveImageUrlToS3 } from '@/utils/server';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'hello' });
}

export async function POST(request: Request) {
  const { url, id } = await request.json();
  await saveImageUrlToS3(url, id);

  return NextResponse.json({ url, id });
}
