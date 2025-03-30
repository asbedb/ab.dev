import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "asbedb.dev/",
  description: "Portfolio homepage for Technology Professional - Asbed Boymoushakian",
  openGraph: {
    title: "Asbed Boymoushakian - Portfolio",
    description: "Portfolio homepage for Technology Professional - Asbed Boymoushakian",
    images: "/image/pfp.jpg", 
    url: "https://asbedb.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="icon" href="/favicon.svg" />
        </head>
      <body className="overscroll-x-contain">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
    </>

  );
}
