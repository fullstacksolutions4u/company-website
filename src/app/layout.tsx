import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Full Stack Solutions",
  description:
    "Full Stack Solutions delivers AI solutions, custom software, web and mobile app development, cloud, DevOps, UI/UX and QA services for modern businesses.",
  keywords: [
    "Full Stack Solutions",
    "AI Solutions",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "DevOps",
    "UI UX Design",
    "QA Testing",
    "Enterprise Software"
  ],
  authors: [{ name: "Full Stack Solutions" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-[#f6f6f6] text-[#0a0a0a] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
