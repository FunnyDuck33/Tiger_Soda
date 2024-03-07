import {ReactNode} from 'react';
import type {Metadata} from "next";

import index_en from '@/../public/assets/shares/index_en.png';

type Props = {
    children: ReactNode;
};

export function generateMetadata(): Metadata {
    return {
        title: 'Tiger Soda',
        description: 'Ethical digital agency',
        metadataBase: new URL('https://funnyduck33.github.io'),
        openGraph: {
            images: index_en.src,
        },
    }
}

export default function RootLayout({children}: Props) {
    return children;
}
