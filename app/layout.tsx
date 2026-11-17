// The layout that wraps every page: loads the two brand fonts and shows the nav bar on top.
import type { Metadata } from "next";
import { DM_Sans, Fredoka } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study Buddy Finder",
  description: "Find someone at UCL to study with.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fredoka.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main className="flex-1 w-full max-w-5xl mx-auto px-6 pb-16">{children}</main>
      </body>
    </html>
  );
}
