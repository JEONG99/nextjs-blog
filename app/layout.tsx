import type { Metadata } from "next";
import "../app/styles/globals.css";
import { notoSansKR } from "./styles/fonts";
import Header from "./components/Header";

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
      <body className={notoSansKR.className + " min-h-screen bg-slate-200"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
