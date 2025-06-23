import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Lora, Montserrat } from "next/font/google";
import ScrollPositionManager from './_components/scroll-position-manager';

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

export const metadata: Metadata = {
  metadataBase: new URL("https://eugenego.club"),
  title: {
    default: "Eugene Go Club | Go/Baduk/Weiqi Players in Eugene, Oregon",
    template: "%s | Eugene Go Club"
  },
  description: "Eugene Go Club is the official Go/Baduk/Weiqi club in Eugene, Oregon. Join our weekly meetups at The Wheel Apizza Pub on Wednesdays and New Day Bakery on Sundays for games, lessons, and community.",
  keywords: ["Eugene Go Club", "eugenego.club", "Go game", "Baduk", "Weiqi", "Eugene Oregon", "board games", "Go players", "Go community", "strategic board game"],
  creator: "Eugene Go Club",
  publisher: "Eugene Go Club",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eugenego.club",
    title: "Eugene Go Club | Go/Baduk/Weiqi Players in Eugene, Oregon",
    description: "Eugene Go Club is the official Go/Baduk/Weiqi club in Eugene, Oregon. Join our weekly meetups at The Wheel Apizza Pub on Wednesdays and New Day Bakery on Sundays.",
    siteName: "Eugene Go Club",
    images: [
      {
        url: "/assets/images/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Eugene Go Club - Go players in Eugene, Oregon"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eugene Go Club | eugenego.club",
    description: "Eugene Go Club is the official Go/Baduk/Weiqi club in Eugene, Oregon. Join our weekly meetups at The Wheel Apizza Pub on Wednesdays and New Day Bakery on Sundays.",
    images: ["/assets/images/cover.jpg"]
  },
  alternates: {
    canonical: "https://eugenego.club"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <body className={inter.className}>
        <Navbar />
        <div
          className={`${playfair.className} ${lora.className} ${montserrat.className}  `}
        >
          <ScrollPositionManager>
            {children}
          </ScrollPositionManager>
        </div>
        <Footer />
      </body>
    </html>
  );
}
