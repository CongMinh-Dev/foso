import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import AreaBg from "../components/myComp/areaBg/AreaBg";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})



export const metadata: Metadata = {
  title: "Foso",
  description: "foso test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css"></link>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css"></link>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-solid.css"></link>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-regular.css"></link>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-light.css"></link>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-thin.css"></link>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-solid.css"></link>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-solid.css"></link>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-solid.css"></link>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-solid.css"></link>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-solid.css"></link>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-solid.css"></link>
      


      </head>
      <body
        className={`${inter.className}`}
      >
        <div className="bodyBg">
          <AreaBg top="2875px" left="90%" />
          <AreaBg top="528px" left="-339px" />
          {children}

        </div>





      </body>
    </html>
  );
}
