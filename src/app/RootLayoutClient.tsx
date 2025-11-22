"use client";

// The imports for the Geist fonts, components, and hooks remain here
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// The metadata export is removed from this file.

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Note: A 2000ms fixed delay for loading isn't ideal for production, 
    // but we'll keep it for now as it reflects your original intent.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      {isLoading ? (
        // Assuming <Loading /> spans the full viewport
        <Loading />
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}