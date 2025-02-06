import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";


export const metadata: Metadata = {
  title: "asbedb.dev/",
  description: "Portfolio homepage for Technology Professional - Asbed Boymoushakian",
  openGraph: {
    title: "Asbed Boymoushakian - Portfolio",
    description: "Portfolio homepage for Technology Professional - Asbed Boymoushakian",
    images: "/image/pfp.jpg", // Path to the image you want to use
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
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💾</text></svg>"/>
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
