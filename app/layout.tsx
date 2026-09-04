import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import "./header.css";
import "./portfolio.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://andreissa-lash-designer.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Andreissa Lash Designer | Extensão de Cílios em Barrinha SP",
  description: "Extensão de cílios em Barrinha/SP com Andreissa Lash Designer. Conheça procedimentos, resultados e agende seu horário pelo WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: { title: "Andreissa Lash Designer", description: "Seu olhar. Sua identidade.", url: "/", siteName: "Andreissa Lash Designer", locale: "pt_BR", type: "website", images: [{ url: "/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Andreissa Lash Designer", description: "Extensão de cílios em Barrinha/SP.", images: ["/opengraph-image"] },
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg", apple: "/apple-icon" },
};

export const viewport: Viewport = { themeColor: "#10100f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>;
}
