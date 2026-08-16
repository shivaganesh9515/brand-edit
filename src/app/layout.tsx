import type { Metadata } from "next";
import { Inter, Roboto_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "The Brand Edit",
  description: "The Strategy, Psychology & Design — Create a brand that turns heads and makes money.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} ${playfairDisplay.variable} font-sans min-h-screen bg-[#1a1a1a] selection:bg-red-600 selection:text-white overflow-x-hidden py-8 px-2 sm:px-4 md:px-8`}
      >
        {children}
      </body>
    </html>
  );
}