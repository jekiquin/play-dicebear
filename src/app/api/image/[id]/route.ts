import { AVATAR_IMAGE_PATH } from '@/config';
import { createFileName, getUrlFromS3 } from '@/utils/server';
import { NextRequest, NextResponse } from 'next/server';

interface RequestContext {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, context: RequestContext) {
  const { id } = context.params;
  //   const url = await getUrlFromS3(Number(id));
  //   console.log(url);
  const fileName = createFileName(Number(id));
  return NextResponse.json({ url: `${AVATAR_IMAGE_PATH}/${fileName}` });
}
