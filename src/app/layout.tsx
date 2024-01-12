import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { styled } from "@mui/zero-runtime";
import "@mui/zero-runtime/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Html = styled("html")({
  color: "red",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html lang="en">
      <body className={inter.className}>{children}</body>
    </Html>
  );
}
