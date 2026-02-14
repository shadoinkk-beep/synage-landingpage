import type { Metadata } from "next";
import "./globals.css";
import { Spline_Sans } from "next/font/google";
import localFont from "next/font/local";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const stylishMother = localFont({
  src: "../fonts/Stylish Mother.otf", // adjust if needed
  variable: "--font-heading",
  display: "swap",
});


const siteUrl = "https://www.synageconsultants.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Synage Consultants | Luxury Real Estate Advisory in Delhi NCR",
    template: "%s | Synage Consultants",
  },

  description:
    "Synage Consultants is a premium real estate advisory firm specializing in residential and commercial properties across Gurgaon and South Delhi.",

  keywords: [
    "Synage Consultants",
    "real estate advisory Gurgaon",
    "luxury properties Delhi NCR",
    "commercial leasing Gurgaon",
    "residential real estate South Delhi",
  ],

  alternates: {
    canonical: "/",
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

  openGraph: {
    type: "website",
    url: siteUrl,
    title:
      "Synage Consultants | Luxury Real Estate Advisory in Delhi NCR",
    description:
      "Premium residential and commercial real estate advisory services in Gurgaon and South Delhi.",
    siteName: "Synage Consultants",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Synage Consultants | Real Estate Advisory Delhi NCR",
    description:
      "Expert guidance for buying, selling and leasing premium real estate in Gurgaon & South Delhi.",
  },

  category: "Real Estate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${splineSans.variable} ${stylishMother.variable}`}>
      <head>
        {/* Structured Data - RealEstateAgent Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Synage Consultants",
              url: siteUrl,
              areaServed: [
                {
                  "@type": "City",
                  name: "Gurgaon",
                },
                {
                  "@type": "City",
                  name: "South Delhi",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gurgaon",
                addressRegion: "Haryana",
                addressCountry: "IN",
              },
              description:
                "Luxury residential and commercial real estate advisory firm in Delhi NCR.",
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
