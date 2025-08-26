import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: {
    template: "%s - ShopCart online Store",
    default: "ShopCart online store"
  },
  description: "ShopCart online store, your one-stop shop for all things fashion and lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
