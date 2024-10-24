import { Noto_Serif } from "next/font/google";

import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Clemens Heithecker",
  description: "Software Engineer",
};

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-noto-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
