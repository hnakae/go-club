import { getAllPosts } from "@/lib/api";
import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Lora, Montserrat } from "next/font/google";
import ScrollPositionManager from './_components/scroll-position-manager';
import Script from 'next/script';

import "./globals.css";
import { Navbar } from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// constants (optional, to avoid repetition)
const BASE_URL = "https://www.eugenego.club";
const TITLE = "Eugene Go Club";
const DESCRIPTION =
  "Join our weekly meetups at The Wheel Apizza Pub on Wednesdays and New Day Bakery on Sundays.";
const OG_IMAGE = "/assets/images/cover.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE,
    template: "%s | Eugene Go Club"
  },
  description: DESCRIPTION,
  keywords: [
    "Eugene Go Club", "eugenego.club", "Go game", "Baduk", "Weiqi", "Eugene Oregon",
    "board games", "Go players", "Go community", "strategic board game", "eugene go.club",
    "eugene go club", "aga", "american go association", "hiro nakae",
    "local go club", "how to play go"
  ],
  creator: "Eugene Go Club",
  publisher: "Eugene Go Club",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Eugene Go Club",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Eugene Go Club - Weekly Meetups"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE]
  },
  alternates: {
    canonical: BASE_URL
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allPosts = getAllPosts();

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/assets/images/slatebg.png" as="image" />
      </head>
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Navbar />
        <div
          className={`flex-grow ${playfair.className} ${lora.className} ${montserrat.className} pt-16 xl:pt-[120px]`}
        >
          <ScrollPositionManager>
            {children}
          </ScrollPositionManager>
        </div>
        <Footer allPosts={allPosts} />
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Eugene Go Club",
              "url": "https://www.eugenego.club",
              "logo": "https://www.eugenego.club/favicon/android-chrome-512x512.png",
              "description": "Eugene Go Club is the official Go/Baduk/Weiqi club in Eugene, Oregon. Join our weekly meetups at The Wheel Apizza Pub on Wednesdays and New Day Bakery on Sundays for games, lessons, and community."
            }
          `}
        </Script>
      </body>
    </html>
  );
}
