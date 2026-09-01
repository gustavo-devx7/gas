import { NextResponse } from "next/server";

const offers: Record<string, { amount: number; description: string }> = { "1": { amount: 3052, description: "Vale Gás do Povo — 12 meses" }, "2": { amount: 6921, description: "Vale Gás do Povo — 30 meses" }, "3": { amount: 13275, description: "Vale Gás do Povo — 50 meses" } };
const idKeys = ["transaction_id", "transactionId", "transactionID", "id", "external_id"];
const qrKeys = ["qr_code", "qrCode", "pix_code", "pixCode", "copy_paste", "copyPaste", "brcode", "emv", "payload", "code"];
function text(value: unknown, max: number) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function digits(value: unknown) { return text(value, 40).replace(/\D/g, ""); }
function findField(value: unknown, keys: string[], depth = 0): string | null { if (!value || typeof value !== "object" || depth > 5) return null; for (const key of keys) { const candidate = (value as Record<string, unknown>)[key]; if (typeof candidate === "string" && candidate.trim()) return candidate.trim(); } for (const child of Object.values(value as Record<string, unknown>)) { const found = findField(child, keys, depth + 1); if (found) return found; } return null; }

export async function POST(request: Request) {
  try {
    const body = await request.json(); const name = text(body.name, 120); const email = text(body.email, 160).toLowerCase(); const document = digits(body.cpf ?? body.document); const phone = digits(body.phone); const offer = offers[String(body.offerId)];
    if (name.length < 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || ![11, 14].includes(document.length) || phone.length < 10 || phone.length > 13 || !offer) return NextResponse.json({ error: "Dados inválidos para criar a cobrança." }, { status: 400 });
    const secret = process.env.FLEVOPAY_SECRET_KEY; if (!secret) return NextResponse.json({ error: "Pagamento temporariamente indisponível." }, { status: 503 });
    const reference = `GAS-${Date.now()}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`; const payload: Record<string, unknown> = { amount: offer.amount, description: offer.description, reference, customer: { name, email, document, phone }, source: "api_externa" };
    if (process.env.PIX_PRODUCT_HASH) payload.productHash = process.env.PIX_PRODUCT_HASH; const webhook = process.env.PIX_WEBHOOK_URL; if (webhook?.startsWith("https://") && !webhook.startsWith("https://app.flevopay.com.br/")) payload.postback_url = webhook;
    const baseUrl = (process.env.FLEVOPAY_API_BASE_URL || "https://app.flevopay.com.br/api/v1").replace(/\/$/, ""); const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 30000); let response: Response;
    try { response = await fetch(`${baseUrl}/transaction`, { method: "POST", headers: { "X-API-Key": secret, "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload), signal: controller.signal, cache: "no-store" }); } catch (error) { if (error instanceof Error && error.name === "AbortError") return NextResponse.json({ error: "A operadora do Pix demorou para responder. Tente novamente em instantes." }, { status: 504 }); throw error; } finally { clearTimeout(timeout); }
    const result = await response.json().catch(() => null); if (!response.ok || !result) { console.error("FlevoPay create response", response.status); return NextResponse.json({ error: "Não foi possível gerar o Pix." }, { status: 502 }); }
    const transactionId = findField(result, idKeys); const qrCode = findField(result, qrKeys); console.info("FlevoPay create fields", { fields: Object.keys(result), hasTransactionId: Boolean(transactionId), hasQrCode: Boolean(qrCode) });
    if (!transactionId || !qrCode) return NextResponse.json({ error: "A cobrança foi criada, mas o código Pix não foi retornado pela operadora." }, { status: 502 });
    return NextResponse.json({ transactionId, reference, qrCode, qrCodeBase64: null, amount: offer.amount, expiresAt: findField(result, ["expires_at", "expiresAt", "expiration"]) });
  } catch (error) { console.error("Pix create error", error); return NextResponse.json({ error: "Não foi possível gerar o Pix." }, { status: 500 }); }
}
