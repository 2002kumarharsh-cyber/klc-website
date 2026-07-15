import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Karanwal Lime Chem | Excellence in Calcium Carbonate",
    template: "%s | Karanwal Lime Chem"
  },
  description: "Manufacturer of Precipitated Calcium Carbonate (PCC) and Ground Calcium Carbonate (GCC) in India. Certified ISO 9001, ISO 14001, WHO-GMP, FSSC 22000.",
  keywords: ["calcium carbonate manufacturer India", "PCC manufacturer", "GCC supplier India", "Precipitated Calcium Carbonate", "Ground Calcium Carbonate"],
  openGraph: {
    title: "Karanwal Lime Chem | Excellence in Calcium Carbonate",
    description: "Industrial Calcium Carbonate Manufacturer (PCC & GCC) - India",
    type: "website",
    locale: "en_US",
    url: "https://karanwallimechem.com",
    siteName: "Karanwal Lime Chem"
  },
  icons: {
    icon: "/images/brand/klc-logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-bg text-text-primary">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

