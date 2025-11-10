import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "FoodWagen",
  description: "FoodWagen",
  icons: {
    icon: "/logo.svg",
  },
};

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sourcesans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} font-sourcesans antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
