import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nook Phone",
  description: "Animal Crossing style Nook Phone UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mPlusRounded.className}>{children}</body>
    </html>
  );
}
