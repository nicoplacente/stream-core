import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://streamcore.com.ar";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "StreamCore | Interacción y control para streamers de Kick",
    template: "%s | StreamCore",
  },
  description:
    "Recompensas, apuestas, overlays y herramientas de control para transformar tu stream de Kick en una experiencia más participativa.",
  keywords: [
    "herramientas para streamers",
    "Kick",
    "overlays OBS",
    "interacción en stream",
    "recompensas para chat",
    "StreamCore",
  ],
  authors: [{ name: "Codeluxe" }],
  creator: "Codeluxe",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "StreamCore",
    title: "StreamCore | Convierte tu stream en una experiencia viva",
    description:
      "Centraliza la interacción de tu comunidad con recompensas, apuestas, overlays y control en tiempo real.",
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamCore | Interacción para streamers de Kick",
    description:
      "Herramientas para crear una comunidad más activa dentro y fuera del chat.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  colorScheme: "dark",
  themeColor: "#070b17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
