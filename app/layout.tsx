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
  metadataBase: new URL("https://matheusferreira.com"),
  title: {
    default: "Matheus Ferreira — Software Engineer",
    template: "%s | Matheus Ferreira",
  },
  description:
    "Personal site of Matheus Ferreira. Software engineering, AI, Big Data and cybersecurity notes.",
  authors: [{ name: "Matheus Ferreira" }],
  openGraph: {
    title: "Matheus Ferreira — Software Engineer",
    description: "Personal site of Matheus Ferreira.",
    url: "https://matheusferreira.com",
    siteName: "Matheus Ferreira",
    locale: "en",
    type: "website",
  },
  robots: { index: true, follow: true },
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
