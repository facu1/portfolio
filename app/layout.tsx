import "./reset.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, NavBar } from "app/components";
import { DrawerProvider } from "app/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facundo Gonzalez - Full Stack Developer",
  description: "My Portfolio",
  icons: {
    icon: "/imgs/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DrawerProvider>
          <NavBar />
        </DrawerProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
}
