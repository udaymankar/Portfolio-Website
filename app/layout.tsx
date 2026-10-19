import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uday Mankar — Software Engineer · Digital Products",
  description:
    "Portfolio of Uday Mankar — Computer Science Engineering graduate specialising in Java, web development, and practical software solutions. Based in Pune, India.",
  openGraph: {
    title: "Uday Mankar — Software Engineer",
    description:
      "Computer Science Engineering graduate building modern software and web applications. Explore projects, skills, and background.",
    type: "website",
    locale: "en_IN",
    siteName: "Uday Mankar Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Uday Mankar — Software Engineer",
    description:
      "CSE graduate building modern software and web applications. Pune, India.",
  },
  keywords: [
    "Uday Mankar",
    "software engineer",
    "web developer",
    "Java developer",
    "portfolio",
    "Pune",
    "fresher",
    "entry level",
    "full stack",
  ],
  authors: [{ name: "Uday Mankar" }],
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
      <body>{children}</body>
    </html>
  );
}