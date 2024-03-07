import type {Metadata} from 'next';

import {NextIntlClientProvider} from 'next-intl';

import index_en from '@/../public/assets/shares/index_en.png';
import index_es from '@/../public/assets/shares/index_es.png';

import '@/app/styles/init.scss';
import './globals.scss'
import styles from './layout.module.css';

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

async function getMessages(locale: string) {
    return (await import(`@/../messages/${locale}.json`)).default
}

export async function generateStaticParams() {
    return ['en', 'es'].map((locale) => ({ locale }))
}

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode,
    params: {locale: string},
}) {
    const messages = await getMessages(locale);

    return (
        <html lang={locale}>
            <body>
            <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
            </NextIntlClientProvider>
            </body>
        </html>
    )
}
