import { Geist, Geist_Mono, Sora } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "StreamCore",
  title: {
    default: "StreamCore | Interacción y control para Streamers",
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
  publisher: "Codeluxe",
  category: "technology",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "StreamCore",
    title: "StreamCore | Convierte tu stream en una experiencia viva",
    description:
      "Centraliza la interacción de tu comunidad con recompensas, apuestas, overlays y control en tiempo real.",
    images: [
      {
        url: "/streamcore.png",
        width: 512,
        height: 512,
        alt: "Logo de StreamCore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamCore | Interacción para streamers de Kick",
    description:
      "Herramientas para crear una comunidad más activa dentro y fuera del chat.",
    images: ["/streamcore.png"],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  colorScheme: "dark",
  themeColor: "#070b17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es-AR"
      className={`${geist.variable} ${geistMono.variable} ${sora.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
