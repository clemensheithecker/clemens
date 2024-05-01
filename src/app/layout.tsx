import { Noto_Serif } from '@next/font/google'

import "./globals.css";

export const metadata = {
  title: "Clemens Heithecker",
  description: "Software Engineer",
};

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: '700',
  variable: '--font-noto-sans',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={notoSerif.variable}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
