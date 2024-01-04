import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

const neuePower = localFont({
  src: [
    {
      path: "../public/fonts/NeuePower-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NeuePower-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeuePower-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NeuePower-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Black Fire",
  description: "Power revolves around black. Black is beautiful",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${neuePower.className} bg-body-texture bg-black bg-auto text-white tracking-wider`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
