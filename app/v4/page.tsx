"use client";
import { createElement, useEffect, useState } from "react";
import Script from "next/script";

export default function V4Page() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 45_000);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <main className="vsl-page">
      <link rel="preconnect" href="https://fast.wistia.com" />
      <link rel="dns-prefetch" href="https://fast.wistia.com" />
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/76wvfmcm2c.js" strategy="afterInteractive" type="module" />
      <section className="vsl-shell">
        <div className="vsl-content" style={{ padding: "22px 16px" }}>
          <h1
            style={{
              margin: "0 0 12px",
              color: "#172033",
              fontSize: "clamp(21px, 4vw, 27px)",
              lineHeight: 1.15,
              textAlign: "center",
            }}
          >
            Descubra como garantir seu benefício
          </h1>
          <p className="vsl-loading-message" role="status">espere o video abaixo carregar, pode demorar alguns segundos</p>
          <div className="vsl-placeholder" style={{ minHeight: 165 }}>
            <style>{"wistia-player[media-id='76wvfmcm2c']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/76wvfmcm2c/swatch'); display: block; filter: blur(5px); padding-top: 56.25%; }"}</style>
            {createElement("wistia-player", {
              "media-id": "76wvfmcm2c",
              aspect: "1.7777777777777777",
            })}
          </div><p
            style={{
              margin: "10px auto 0",
              color: "#5c6678",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            Você já está quase terminando.
          </p>
          <button
            type="button"
            className="vsl-button"
            disabled={!ready}
            onClick={() => window.location.assign("/v5")}
            style={{ marginTop: 12, opacity: ready ? 1 : 0.7 }}
          >
            {ready ? "CONTINUAR →" : "AGUARDE…"}
          </button>
        </div>
      </section>
    </main>
  );
}
