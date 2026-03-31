import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Alan Nur - Portfolio",
  description: "Founder Stezio | CS @ UW | Prev SWE @ TikTok (Tokopedia) | Robotics & AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-white text-neutral-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
