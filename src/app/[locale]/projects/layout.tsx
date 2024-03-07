import {ReactNode} from 'react';
import type {Metadata} from "next";

import projects_en from '@/../public/assets/shares/projects_en.png';
import projects_es from '@/../public/assets/shares/projects_es.png';

type Props = {
    children: ReactNode;
};

export function generateMetadata({params}: {params: {locale: string}}): Metadata {
    const locale = params.locale as keyof typeof localeMap;

    const localeMap = {
        'en': projects_en.src,
        'es': projects_es.src
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
