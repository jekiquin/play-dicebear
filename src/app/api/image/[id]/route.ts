import { NextRequest, NextResponse } from 'next/server';

interface RequestContext {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, context: RequestContext) {
  const { id } = context.params;
  return NextResponse.json('here');
}
