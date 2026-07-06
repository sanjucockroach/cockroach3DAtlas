import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CockroachIAS — UPSC World Atlas | Explore the Unexplored",
  description:
    "A live 3D world map for UPSC aspirants — NASA EONET events, places in news, biodiversity hotspots, Ramsar sites, UNESCO heritage, straits, rivers and more, each tied to the syllabus. For those who refuse to quit.",
  keywords: [
    "UPSC", "World Atlas", "CockroachIAS", "NASA EONET", "Geography",
    "International Relations", "Ramsar sites", "UNESCO", "Prelims", "Mains",
  ],
  authors: [{ name: "CockroachIAS Companion Institute" }],
  openGraph: {
    title: "CockroachIAS — UPSC World Atlas",
    description: "Explore the Unexplored. A live 3D geopolitical & ecological intelligence globe for UPSC.",
    siteName: "CockroachIAS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CockroachIAS — UPSC World Atlas",
    description: "Explore the Unexplored — a live 3D globe for UPSC aspirants.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
