import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Node Auth",
  description: "Simple authentication app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-gradient-to-t from-[#0e1c26] via-[#2a454b] to-[#294861] flex items-center justify-center w-full"
        )}
      >
        <Provider>
          <div className="w-full md:max-w-xl mx-5 md:mx-auto max-w-lg">
            {children}
          </div>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
