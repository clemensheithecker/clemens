import "./globals.css";

export const metadata = {
  title: "Clemens Heithecker",
  description: "Software Engineer",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
