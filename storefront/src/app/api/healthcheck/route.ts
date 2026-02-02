import { NextRequest, NextResponse } from 'next/server';

export const GET = (req: NextRequest) => {
  return NextResponse.json({ status: 'ok' });
};
// Dummy change for testing PR - 1770062276
