import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Changed font
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ // Initialized new font
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta", // Defined variable
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
        className={`${jakarta.variable} antialiased font-sans`} // Applied new font variable
      >
        {children}
      </body>
    </html>
  );
}
