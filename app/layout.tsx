import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GtagScript from "@/components/google/gtag";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Funder Asia | Strategic M&A Advisory for Asia’s Middle Market",
  description:
    "Funder Asia is a strategic M&A advisory boutique guiding founders and business owners through sell-side, buy-side, and cross-border transactions across Asia’s middle market.",
  keywords:
    "Funder Asia, M&A advisory Asia, mergers and acquisitions Asia, middle market M&A, sell-side advisory, buy-side advisory, strategic exits, cross-border M&A, corporate finance Asia",
  robots: "index, follow",
  openGraph: {
    title: "Funder Asia | Strategic M&A Advisory for Asia’s Middle Market",
    description:
      "Guiding founders and business owners through confidential, well-executed M&A transactions across Asia.",
    url: "https://funder.asia/",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Funder Asia",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funder Asia | Strategic M&A Advisory for Asia’s Middle Market",
    description:
      "Strategic M&A advisory for founders and middle-market companies across Asia.",
    images: ["/img/logo.png"],
  },
  icons: {
    icon: "/img/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Analytics */}       
        <GtagScript />

        {/* App */}
        {children}
      </body>
    </html>
  );
}
