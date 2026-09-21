import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://macnomsmedia.com'),
  title: "MACNOMS MEDIA — Growth · Community · Digital Strategy",
  description:
    "We help ambitious brands turn attention into community, customers and growth. Strategy first, execution where it matters.",
  keywords: [
    "Macnoms Media",
    "Growth Consultancy",
    "Community Building",
    "Influencer Marketing Nigeria",
    "Digital Strategy",
    "Brand Growth",
  ],
  authors: [{ name: "Macnoms Media" }, { name: "Placid Labs", url: "https://placidlabs.com" }],
  creator: "Placid Labs",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "MACNOMS MEDIA — Growth · Community · Digital Strategy",
    description:
      "We help ambitious brands turn attention into community, customers and long-term brand value.",
    url: "https://macnomsmedia.com",
    siteName: "Macnoms Media",
    images: [
      {
        url: "/logo.png",
        width: 541,
        height: 541,
        alt: "Macnoms Media",
      },
    ],
    locale: "en_US",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-100 text-burgundy-950 font-sans antialiased selection:bg-burgundy-900 selection:text-cream-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
