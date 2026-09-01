"use client";
import { useState } from "react";
import Link from "next/link";

const options = [
  { id: 1, amount: "R$ 30,52", period: "12 meses", detail: "1 ano de vale" },
  { id: 2, amount: "R$ 69,21", period: "30 meses", detail: "2 anos e meio de vale" },
  { id: 3, amount: "R$ 132,75", period: "50 meses", detail: "4 anos e 2 meses de vale" },
];

export default function V5Page() {
  const [selected, setSelected] = useState<number | null>(null);
  function choose(id: number) { setSelected(id); sessionStorage.setItem("gas-offer", String(id)); sessionStorage.removeItem("gas-charge"); sessionStorage.removeItem("gas-charge-offer"); }
  return <main className="form-page"><section className="form-shell"><div className="form-heading"><p className="form-kicker">VALE GÁS DO POVO</p><h1>Escolha seu vale-gás</h1><p>Selecione uma das opções disponíveis para continuar.</p></div><div role="radiogroup" aria-label="Opções de vale-gás" style={{ display: "grid", gap: 14, marginTop: 28 }}>{options.map((option) => { const chosen = selected === option.id; const muted = selected !== null && !chosen; return <button key={option.id} type="button" role="radio" aria-checked={chosen} onClick={() => choose(option.id)} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "5px 16px", padding: "18px 20px", border: `2px solid ${chosen ? "#1351b4" : muted ? "#d4d7dc" : "#e4e8ef"}`, borderRadius: 12, background: chosen ? "#eef4ff" : muted ? "#e7e8eb" : "#fff", color: muted ? "#8b9099" : "#172033", textAlign: "left", cursor: "pointer" }}><span style={{ fontSize: 13, fontWeight: 700 }}>Opção {option.id}</span><strong style={{ gridColumn: 2, gridRow: "1 / span 2", alignSelf: "center", color: muted ? "#8b9099" : "#1351b4", fontSize: 22 }}>{option.amount}</strong><span style={{ color: muted ? "#8b9099" : "#5c6678", fontSize: 14 }}>{option.period} ({option.detail})</span></button>; })}</div><Link href={selected === null ? "#" : "/v6"} aria-disabled={selected === null} onClick={(event) => { if (selected === null) event.preventDefault(); }} style={{ display: "flex", justifyContent: "center", marginTop: 24, padding: "16px 20px", borderRadius: 10, background: selected === null ? "#aeb3bb" : "#1351b4", color: "#fff", fontWeight: 700, textAlign: "center", cursor: selected === null ? "not-allowed" : "pointer" }}>SACAR VALE GÁS DO POVO</Link><p className="form-disclaimer">Escolha uma opção acima para liberar o botão de saque.</p></section></main>;
}
