import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.formData();
  const payload = Object.fromEntries(data.entries());

  console.info("Contact request", {
    ...payload,
    message: payload.message,
  });

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ ok: true });
}
