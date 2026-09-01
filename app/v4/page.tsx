"use client";
import { useEffect, useState } from "react";

export default function V4Page() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setReady(true), 1000); return () => window.clearTimeout(timer); }, []);
  return <main className="vsl-page"><section className="vsl-shell"><div className="vsl-content" style={{ padding: "22px 16px" }}><h1 style={{ margin: "0 0 12px", color: "#172033", fontSize: "clamp(21px, 4vw, 27px)", lineHeight: 1.15, textAlign: "center" }}>Descubra como garantir seu benefício</h1><div className="vsl-placeholder" style={{ minHeight: 165, alignItems: "start", textAlign: "left" }}><div style={{ maxWidth: 500, padding: "18px 16px", margin: "auto" }}><p style={{ margin: "0 0 8px", color: "#1351b4", fontSize: 10, fontWeight: 700, letterSpacing: ".08em" }}>VÍDEO EXPLICATIVO</p><p style={{ margin: "0 0 7px", color: "#172033", fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>Entenda como consultar seu benefício.</p><p style={{ margin: 0, color: "#5c6678", fontSize: 13, lineHeight: 1.45 }}>A explicação é rápida. Assista até o final para conferir os próximos passos.</p></div></div><p style={{ margin: "10px auto 0", color: "#5c6678", fontSize: 12, textAlign: "center" }}>Você já está quase terminando.</p><button type="button" className="vsl-button" disabled={!ready} onClick={() => window.location.assign("/v5")} style={{ marginTop: 12, opacity: ready ? 1 : .7 }}>{ready ? "CONTINUAR →" : "AGUARDE…"}</button></div></section></main>;
}
