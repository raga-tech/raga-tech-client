import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainBackground from "@/components/backgrounds/MainBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raga Tech",
  description: "Raga Tech is one of the leading Tech Companies in providing the best services to people world wide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainBackground />
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
