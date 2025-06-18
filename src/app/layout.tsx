import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ForecastLabs - Charting a Safer Future",
  description: "ForecastLabs uses Structural Causal Models and advanced AI agents to understand the drivers of tomorrow, providing open intelligence to help build a better world.",
  keywords: "AI safety, forecasting, causal models, artificial intelligence, non-profit, future research",
  authors: [{ name: "ForecastLabs" }],
  openGraph: {
    title: "ForecastLabs - Charting a Safer Future",
    description: "A non-profit organization dedicated to securing a beneficial future for humanity in the age of artificial intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
