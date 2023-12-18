import type { Metadata } from "next";
import "../app/styles/globals.css";
import { ubuntu } from "./styles/fonts";

export const metadata: Metadata = {
  title: "Jeongbaang Blog",
  description: "Welcome to Jeongbaang Blog(test version)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
