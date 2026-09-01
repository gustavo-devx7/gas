export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  if (payload) console.info("Pix webhook", { transactionId: payload.transaction_id, externalId: payload.external_id, status: payload.status });
  return new Response("ok", { status: 200 });
}
