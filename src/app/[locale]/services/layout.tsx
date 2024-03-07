import {ReactNode} from 'react';
import type {Metadata} from "next";

import services_en from '@/../public/assets/shares/services_en.png';
import services_es from '@/../public/assets/shares/services_es.png';

type Props = {
    children: ReactNode;
};

export function generateMetadata({params}: {params: {locale: string}}): Metadata {
    const locale = params.locale as keyof typeof localeMap;

    const localeMap = {
        'en': services_en.src,
        'es': services_es.src
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

export default function ProjectLayout({children}: Props) {
    return children;
}
