import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0E0E10',
};

export const metadata: Metadata = {
  title: "Harshad Nikam - Portfolio",
  description: "Harshad Nikam is a Full Stack Developer specializing in MERN stack development. View projects, skills, and get in touch.",
  keywords: ["Harshad Nikam", "Full Stack Developer", "MERN Stack", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Harshad Nikam" }],
  openGraph: {
    title: "Harshad Nikam - Portfolio",
    description: "Full Stack Developer specializing in MERN stack",
    type: "website",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
