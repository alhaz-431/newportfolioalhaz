import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammad Alhaz Uddin | Full Stack Developer",
  description: "Portfolio of Mohammad Alhaz Uddin - Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0B0F19] text-gray-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}