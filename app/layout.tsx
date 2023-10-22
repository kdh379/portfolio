import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "./provider";

import App from "components/app";
import data from "data/metadata.json";
import "styles/globals.scss";

const inter = Inter( { subsets: ["latin"] } );

export const metadata: Metadata = {
    ...data,
    openGraph: {
        ...data,
        type: "website",
        locale: "ko_KR",
        images: [
            {
                url: data.image,
                width: 512,
                height: 512,
                alt: "Profile",
            },
        ],
    },
};

export default function RootLayout( {
    children,
}: {
    children: React.ReactNode;
} ) {
    return (
        <html lang="ko"
            data-theme="dark"
            data-sidebar="false">
            <link rel="shortcut icon"
                href="/svg/favicon.svg"
                type="image/x-icon" />
            <body className={inter.className}>
                <Providers>
                    <App>
                        {children}
                    </App>
                </Providers>
                <div id="dialog"></div>
            </body>
        </html>
    );
}