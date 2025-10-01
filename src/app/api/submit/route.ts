import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  // tiny artificial delay so it feels real
  await new Promise((r) => setTimeout(r, 400));

  // echo back what we got (mock)
  return NextResponse.json({
    ok: true,
    received: data,
    at: new Date().toISOString(),
  });
}
