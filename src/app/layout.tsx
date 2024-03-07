import {ReactNode} from 'react';
import type {Metadata} from "next";

import index_en from '@/../public/assets/shares/index_en.png';
import index_es from '@/../public/assets/shares/index_es.png';

type Props = {
    children: ReactNode;
};

export function generateMetadata({params}: {params: {locale: string}}): Metadata {
    const locale = params.locale as keyof typeof localeMap;

    const localeMap = {
        'en': index_en.src,
        'es': index_es.src
    }

    return {
        title: 'Tiger Soda',
        description: 'Ethical digital agency',
        metadataBase: new URL('https://funnyduck33.github.io'),
        openGraph: {
            images: localeMap[locale],
        },
    }
}

export default function RootLayout({children}: Props) {
    return children;
}
