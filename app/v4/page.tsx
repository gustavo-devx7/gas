"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function V4Page() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  return <main className="vsl-page"><header className="tb-hd"><div className="tb-hd-in"><Link className="tb-hd-brand" href="/"><Image src="/images/logo-tb-square-512-150x150.webp" alt="Tudo Benefícios" width={36} height={36} /><span>tudo benefícios</span></Link></div></header><section className="vsl-shell"><div className="vsl-content"><div className="vsl-placeholder">aqui vai a vsl</div><button type="button" className={`vsl-button${ready ? " ready" : ""}`} disabled={!ready} onClick={() => window.location.assign("/v5")}>CONTINUAR <span>→</span></button></div></section></main>;
}
