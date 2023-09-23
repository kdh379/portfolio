import type { Metadata } from "next";
import { Inter } from "next/font/google";

import App from "components/app";

import "styles/globals.scss";

const inter = Inter( { subsets: ["latin"] } );

export const metadata: Metadata = {
    title: "KDH Portfolio",
    description: "KDH Portfolio",
};

export default function RootLayout( {
    children,
}: {
    children: React.ReactNode;
} ) {
    return (
        <html lang="ko"
            data-theme="light">
            <body className={inter.className}>
                <App>
                    {children}
                </App>
            </body>
        </html>
    );
}