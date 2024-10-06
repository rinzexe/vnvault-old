import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import Header from "./_components/header";
import { AuthProvider } from "./_components/auth-provider";
import Footer from "./_components/footer";
import { NextUIProvider } from '@nextui-org/react';

const poppins = Poppins({ weight: "300", variable: '--font-poppins', subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VNVault",
  description: "Everything visual novels",
};



export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable + " " + poppins.className + " bg-black text-white"}>
        <div className="bg-neutral-950/10 fixed w-screen h-screen z-[-99999]">
        </div>
        <div id="modal-content">

        </div>
        <AuthProvider>
          <NextUIProvider>
            <Header />
            <div className="lg:top-24 relative p-6 flex flex-col items-center justify-between">
              <div className="max-w-page w-full">
                {children}
              </div>
              {/*             <Footer /> */}
            </div>
          </NextUIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
