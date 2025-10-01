import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  await new Promise((r) => setTimeout(r, 400));

  return NextResponse.json({
    ok: true,
    received: data,
    at: new Date().toISOString(),
  });
}
