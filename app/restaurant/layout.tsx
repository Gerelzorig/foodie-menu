"use client";
import Head from "next/head";
import Header from "../components/restaurant/header";
import Footer from "../components/restaurant/footer";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-stone-900 mt-32">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
