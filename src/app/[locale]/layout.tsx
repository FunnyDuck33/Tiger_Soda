import {useLocale} from 'next-intl';
import type {Metadata} from 'next';

import {NextIntlClientProvider} from 'next-intl';

import './styles/init.scss';
import './globals.scss'
import styles from './layout.module.css';

export const metadata: Metadata = {
    title: 'Tiger Soda',
    description: 'Ethical digital agency',
}

export default async function LocaleLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const locale = useLocale();
    let messages = await import(`@/../messages/${locale}.json`);

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
