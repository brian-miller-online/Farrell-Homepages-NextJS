import type { Metadata } from "next";
import { Source_Sans_3, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { QuoteFormProvider } from "@/context/QuoteFormContext";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.farrellspainting.com"),
  title: {
    default: "Farrell's Painting | Professional Painting Contractor in Fort Wayne & Northeast Indiana",
    template: "%s | Farrell's Painting",
  },
  description: "Trusted painting contractor serving Fort Wayne and Northeast Indiana. Specializing in exterior painting, interior painting, and deck staining for lake houses and fine homes. 20+ years experience. 4.9★ rated. Call (260) 909-0717 for a free quote.",
  keywords: ["painting contractor", "Fort Wayne", "Northeast Indiana", "exterior painting", "interior painting", "deck staining", "lake house painting", "Hamilton Lake", "Lake James"],
  authors: [{ name: "Farrell's Painting" }],
  creator: "Farrell's Painting",
  publisher: "Farrell's Painting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.farrellspainting.com",
    siteName: "Farrell's Painting",
    title: "Farrell's Painting | Professional Painting Contractor in Fort Wayne & Northeast Indiana",
    description: "Trusted painting contractor serving Fort Wayne and Northeast Indiana. Specializing in exterior painting, interior painting, and deck staining for lake houses and fine homes.",
    images: [
      {
        url: "/joe-farrell-headshot.jpg",
        width: 1200,
        height: 630,
        alt: "Joe Farrell - Owner of Farrell's Painting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farrell's Painting | Professional Painting Contractor",
    description: "Trusted painting contractor serving Fort Wayne and Northeast Indiana.",
    images: ["/joe-farrell-headshot.jpg"],
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
    <html lang="en" className={`${sourceSans.variable} ${libreBaskerville.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="font-sans antialiased bg-warm-white text-foreground">
        <QuoteFormProvider>
          {children}
        </QuoteFormProvider>
      </body>
    </html>
  );
}
