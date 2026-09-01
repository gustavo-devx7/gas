import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { transactionId } = await request.json().catch(() => ({}));
  const id = String(transactionId ?? "").slice(0, 64);
  const secret = process.env.FLEVOPAY_SECRET_KEY;
  if (!id || !secret) return NextResponse.json({ status: "pending", upsellUrl: process.env.UPSELL_URL ?? null });
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const response = await fetch(`https://app.flevopay.com.br/api/v1/query?action=get_transaction&id=${encodeURIComponent(id)}`, { headers: { "X-API-Key": secret }, signal: controller.signal, cache: "no-store" });
    clearTimeout(timeout);
    const result = await response.json().catch(() => null);
    return NextResponse.json({ status: typeof result?.status === "string" ? result.status : typeof result?.data?.status === "string" ? result.data.status : "pending", upsellUrl: process.env.UPSELL_URL ?? null });
  } catch { return NextResponse.json({ status: "pending", upsellUrl: process.env.UPSELL_URL ?? null }); }
}
