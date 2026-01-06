import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/container/navbar/Narbar";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "João Victor | Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider attribute={"data-theme"} defaultTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
