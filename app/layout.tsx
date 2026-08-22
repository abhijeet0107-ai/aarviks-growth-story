import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const nunitoSans = Nunito_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Aarvik's Growth Story",
  description: "A digital keepsake of baby Aarvik growing up - born February 5, 2026 at Sitaram Bhartia Hospital, New Delhi",
  openGraph: {
    title: "Aarvik's Growth Story",
    description: "A digital keepsake of baby Aarvik growing up - born February 5, 2026 at Sitaram Bhartia Hospital, New Delhi",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aarvik's Growth Story - A digital keepsake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarvik's Growth Story",
    description: "A digital keepsake of baby Aarvik growing up - born February 5, 2026 at Sitaram Bhartia Hospital, New Delhi",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}