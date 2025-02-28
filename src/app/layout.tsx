import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";
import Container from "@/components/global/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Store",
  description: "smart store construída com Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Container className="py-20">{children}</Container>
      </body>
    </html>
  );
}
