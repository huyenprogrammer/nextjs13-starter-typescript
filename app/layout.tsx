"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import Container from "react-bootstrap/Container";

import AppFooter from "@/components/app.footer";
import AppHeader from "@/components/app.header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppHeader />

        <Container>{children}</Container>

        <AppFooter />
      </body>
    </html>
  );
}
