import type { Metadata } from "next";
import { Lacquer } from "next/font/google";
import "./globals.css";

const lacquer = Lacquer({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PizzaPizza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}