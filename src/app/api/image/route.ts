import { saveImageUrlToS3 } from '@/utils/server';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url, id } = await request.json();
    const imageUrl = await saveImageUrlToS3(url, id);
    return NextResponse.json(imageUrl);
  } catch (e: unknown) {
    console.log('error', e);
    return NextResponse.error();
  }
}
