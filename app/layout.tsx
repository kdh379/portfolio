import { PropsWithChildren } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "./provider";

import App from "components/app";

import "styles/globals.scss";

const inter = Inter( { subsets: ["latin"] } );

export const metadata: Metadata = {
    title: "KDH Portfolio",
    description: "KDH Portfolio",
};

export default function RootLayout( props: PropsWithChildren ) {
    const {
        children,
    } = props;

    return (
        <html lang="ko"
            data-theme="light">
            <link rel="shortcut icon"
                href="/svg/favicon.svg"
                type="image/x-icon" />
            <body className={inter.className}>
                <Providers>
                    <App>
                        {children}
                    </App>
                </Providers>
            </body>
        </html>
    );
}