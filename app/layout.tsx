import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Theme from "./provider";
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
            <body className={inter.className}>
                <ThemeProvider defaultTheme="dark" enableSystem={false}>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
