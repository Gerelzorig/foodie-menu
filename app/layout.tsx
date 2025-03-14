import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import Head from "next/head";
import Header from "./components/restaurant/header";
import Footer from "./components/restaurant/footer";
import { ThemeProvider } from "@/app/context/ThemeContext";
import GsapProvider from "./context/GsapContext";

export const metadata: Metadata = {
  title: "Prime catering & restaurant",
  description: "Prime catering & restaurant",
  icons: {
    icon: "/favicon.ico", // Default favicon
    apple: "/favicon.png", // For Apple devices
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <body>
        <ThemeProvider>
          <GsapProvider>
            <main className="flex-col text-white dark:text-white items-center justify-between">
              {children}
            </main>
          </GsapProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
