import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Y.S. Tetteh Prime Limited Company | Diversified Group",
    description: "A diversified group of companies delivering excellence across agriculture, manufacturing, logistics, and services.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <div className="min-h-screen bg-white">
                    <Navigation />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
