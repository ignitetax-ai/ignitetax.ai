import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IgniteTaxAI - AI-Powered Tax Co-Pilot for the Philippines",
  description:
    "AI-powered tax co-pilot for tax professionals, business owners, freelancers, students and educators in the Philippines. Streamline research, enhance communications, and ensure seamless compliance.",
  keywords: [
    "tax AI",
    "Philippines tax",
    "BIR",
    "tax compliance",
    "tax assistant",
    "AI tax co-pilot",
  ],
  authors: [{ name: "IgniteTaxAI" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "IgniteTaxAI - AI-Powered Tax Co-Pilot",
    description:
      "AI-powered tax co-pilot for tax professionals, business owners, freelancers, students and educators in the Philippines.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="relative overflow-hidden pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
