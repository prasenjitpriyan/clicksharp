import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Click Sharp",
  description: "A dynamic and memorable photography gallery website.",
  keywords: ["photography", "gallery", "unsplash"],
  authors: [{ name: "Prasenjit Das" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
