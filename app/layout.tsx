import type { Metadata } from "next";
import "./globals.css";
import { officialUrl } from "./config";
import BackRedirect from "./back-redirect";
import UTMifyScripts from "./utmify-scripts";

export const metadata: Metadata = { title: "Gás do Povo", description: "Veja quem tem direito ao Gás do Povo e como consultar o benefício.", metadataBase: officialUrl ? new URL(officialUrl) : undefined, openGraph: { title: "Gás do Povo", description: "Guia para consultar o benefício.", images: ["/images/Gas-do-Povo-2.webp"], locale: "pt_BR", type: "article" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body><UTMifyScripts /><BackRedirect />{children}</body></html>; }
