import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://udaymankar.vercel.app";


const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Uday Kisan Mankar",
  alternateName: ["Uday Mankar", "UKM"],
  url: siteUrl,
  image: `${siteUrl}/icon.svg`,
  jobTitle: "Software Testing and QA Automation Enthusiast",
  description:
    "Computer Science Engineering graduate in Pune, India, focused on software testing, QA automation with Java and Selenium, and web development.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "R. V. Parankar College of Engineering & Technology",
  },
  sameAs: [
    "https://github.com/udaymankar",
    "https://linkedin.com/in/udaymankar",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Uday Mankar | Software Testing, Java & Web Development",
    template: "%s | Uday Mankar",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: [{ url: "/icon.svg?v=2", type: "image/svg+xml" }] },
  description:
    "Official portfolio of Uday Kisan Mankar (Uday Mankar), a Computer Science Engineering graduate in Pune, India. Explore software testing, QA automation with Java and Selenium, web development projects, skills, and resume.",
  applicationName: "Uday Mankar Portfolio",
  openGraph: {
    url: siteUrl,
    title: "Uday Kisan Mankar (Uday Mankar) — Portfolio",
    description:
      "Official portfolio of Uday Kisan Mankar in Pune, India, featuring QA automation, Java, Selenium WebDriver, web development projects, and resume.",
    type: "website",
    locale: "en_IN",
    siteName: "Uday Mankar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uday Kisan Mankar (Uday Mankar) — Portfolio",
    description:
      "QA automation, Java, Selenium WebDriver, and web development portfolio. Pune, India.",
  },
  keywords: [
    "Uday Kisan Mankar",
    "Uday Mankar",
    "Uday Mankar Pune",
    "Uday Kisan Mankar portfolio",
    "software testing",
    "QA automation",
    "automation tester",
    "Selenium WebDriver Java",
    "Java developer",
    "web developer",
    "software engineer",
    "Computer Science Engineering",
    "portfolio",
    "Pune India",
  ],
  authors: [{ name: "Uday Kisan Mankar", url: siteUrl }],
  creator: "Uday Kisan Mankar",
  publisher: "Uday Kisan Mankar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}