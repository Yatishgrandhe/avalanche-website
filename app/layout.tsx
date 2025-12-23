import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Avalanche Robotics | FRC 2724 & FTC 31643",
  description: "Avalanche Robotics and Everest Robotics teams from Charlotte, North Carolina. Innovating the future through STEM education and competition.",
  icons: {
    icon: '/images/avalanche-logo.png',
    shortcut: '/images/avalanche-logo.png',
    apple: '/images/avalanche-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden`}>
        <Background />
        <Navigation />
        <main className="flex-grow relative z-10 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
