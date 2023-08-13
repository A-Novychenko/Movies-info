import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Header} from "./components/Header/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Movie-info",
  description: "Trending movies list ",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <title>Movies-info</title>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
