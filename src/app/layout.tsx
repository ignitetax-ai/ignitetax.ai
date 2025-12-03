import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarNew from "./components/Navbar-new";
import FooterNew from "./components/Footer-new";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IgniteTaxAI",
  description: "AI Tax Assistant for Tax Professionals and Businesses",
  icons: {
    icon: "/favicon.ico",
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
        <NavbarNew />
        <main id="main-content" className="relative overflow-hidden pt-20">
          {children}
        </main>
        <FooterNew />
      </body>
    </html>
  );
}
