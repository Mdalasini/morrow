import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morrow",
  description: "A minimalist personal journal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
