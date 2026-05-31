import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aravindan G — Frontend Developer",
  description:
    "Frontend Developer with 4 years of experience building scalable web and mobile applications using React.js, Next.js, TypeScript, and React Native.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Tailwind CSS",
    "Aravindan G",
    "Portfolio",
  ],
  authors: [{ name: "Aravindan G" }],
  openGraph: {
    title: "Aravindan G — Frontend Developer",
    description:
      "Frontend Developer with 4 years of experience building scalable web and mobile applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravindan G — Frontend Developer",
    description:
      "Frontend Developer with 4 years of experience building scalable web and mobile applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased noise">{children}</body>
    </html>
  );
}
