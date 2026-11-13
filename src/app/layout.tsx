import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://macnomsmedia.com'),
  title: "Macnoms Media — Growth · Community · Digital Strategy",
  description:
    "We build growth systems that turn attention into community, customers and long-term brand value. Strategy first. Execution where it matters.",
  keywords: [
    "Macnoms Media",
    "Growth Consultancy",
    "Community Building",
    "Influencer Marketing Nigeria",
    "Digital Strategy",
    "Brand Growth",
  ],
  authors: [{ name: "Macnoms Media" }],
  creator: "Macnoms Media",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Macnoms Media — Growth · Community · Digital Strategy",
    description:
      "We build growth systems that turn attention into community, customers and long-term brand value.",
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
          href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F6F3EB] text-[#1E0C12] font-sans antialiased selection:bg-[#200D13] selection:text-[#F6F3EB] min-h-screen">
        {children}
      </body>
    </html>
  );
}