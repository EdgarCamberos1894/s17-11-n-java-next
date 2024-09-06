import type { Metadata } from "next";
import { lato } from '@/font/google'
import "./globals.css";
import ProvidersTanstack from "@/context/ProvidersTanstack";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}><ProvidersTanstack>
        {children}
      </ProvidersTanstack></body>
    </html>
  );
}
