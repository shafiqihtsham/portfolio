import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "./provider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ihtsham Shafiq",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="min-h-screen min-w-screen"
    >
      <Theme>
        <body className={inter.className}>
          <Header />
          {children} <Footer />
        </body>
      </Theme>
    </html>
  );
}
