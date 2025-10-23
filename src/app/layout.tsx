import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martiniano, Surita & Advogados | Escritório de Advocacia em Santo André - SP",
  description:
    "O escritório Martiniano, Surita & Advogados oferece assessoria jurídica especializada em Direito Civil, Empresarial, Trabalhista, Família e Tributário. Atendimento personalizado em Santo André - SP e região.",
  keywords: [
    "advogado em Santo André",
    "advocacia empresarial",
    "direito civil",
    "direito trabalhista",
    "advogado de família",
    "advogado tributário",
    "assessoria jurídica Santo André",
    "Martiniano Surita Advogados",
  ],
  authors: [{ name: "Martiniano, Surita & Advogados" }],
  creator: "Martiniano, Surita & Advogados",
  publisher: "Martiniano, Surita & Advogados",
  metadataBase: new URL("https://www.martinianosuritaeadvogados.com.br"),
  openGraph: {
    title: "Martiniano, Surita & Advogados | Advocacia em Santo André - SP",
    description:
      "Escritório de advocacia especializado em Direito Civil, Empresarial, Trabalhista, Família e Tributário. Atendimento em Santo André e região.",
    url: "https://www.martinianosuritaeadvogados.com.br",
    siteName: "Martiniano, Surita & Advogados",
    images: [
      {
        url: "https://www.martinianosuritaeadvogados.com.br/logotag.png",
        width: 1200,
        height: 630,
        alt: "Martiniano, Surita & Advogados",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martiniano, Surita & Advogados",
    description:
      "Assessoria jurídica especializada em Santo André - SP. Direito Civil, Empresarial, Trabalhista, Família e Tributário.",
    images: ["https://www.martinianosuritaeadvogados.com.br/logotag.png"],
  },
  alternates: {
    canonical: "https://www.martinianosuritaeadvogados.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
