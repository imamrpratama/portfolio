import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Imam Rizky Pratama - Full Stack Developer | Laravel, Flutter, Next.js",
  description:
    "Full-stack developer specializing in Laravel, Flutter, and Next.js. Creating scalable web applications and mobile solutions with expertise in PHP, MySQL, and modern JavaScript frameworks.",
  keywords: [
    "Full Stack Developer",
    "Laravel Developer",
    "Flutter Developer",
    "Next.js",
    "PHP",
    "MySQL",
    "Tailwind CSS",
    "Web Development",
    "Mobile Development",
  ],
  authors: [{ name: "Imam Rizky Pratama" }],
  creator: "Imam Rizky Pratama",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imamrpratama.github.io/portfolio",
    title: "Imam Rizky Pratama - Full Stack Developer",
    description:
      "Full-stack developer specializing in Laravel, Flutter, and Next.js. Creating scalable web applications and mobile solutions.",
    siteName: "Imam Rizky Pratama Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imam Rizky Pratama - Full Stack Developer",
    description:
      "Full-stack developer specializing in Laravel, Flutter, and Next.js",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
