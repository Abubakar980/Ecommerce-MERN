import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import '../globals.css'



export const metadata: Metadata = {
  title: {
    template: "%s - ShopCart online Store",
    default: "ShopCart online store"
  },
  description: "ShopCart online store, your one-stop shop for all things fashion and lifestyle.",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  );
}
