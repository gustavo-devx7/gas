import type { Metadata } from "next";
import "./globals.css";
import { officialUrl } from "./config";

export const metadata: Metadata = {
  title: "Gás do Povo",
  description: "Veja quem tem direito ao Gs do Povo, quantos botijes recebe e como retirar o vale no portal oficial.",
  metadataBase: officialUrl ? new URL(officialUrl) : undefined,
  openGraph: {
    title: "Gás do Povo",
    description: "Guia completo para consultar e retirar o botijo gratuito.",
    images: ["/images/Gas-do-Povo-2.webp"],
    locale: "pt_BR",
    type: "article",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
