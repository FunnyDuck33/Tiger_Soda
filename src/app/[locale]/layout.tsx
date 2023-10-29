import type {Metadata} from 'next';

import {NextIntlClientProvider} from 'next-intl';

import './styles/init.scss';
import './globals.scss'
import styles from './layout.module.css';

export const metadata: Metadata = {
    title: 'Tiger Soda',
    description: 'Ethical digital agency',
}

async function getMessages(locale: string) {
    return (await import(`@/../messages/${locale}.json`)).default
}

//function to generate the routes for all the locales
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
