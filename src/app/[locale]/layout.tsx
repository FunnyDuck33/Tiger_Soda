import {useLocale} from 'next-intl';
import type {Metadata} from 'next';

import './styles/init.scss';
import './globals.css'
import styles from './layout.module.css';

export const metadata: Metadata = {
    title: 'Tiger Soda',
    description: 'Ethical digital agency',
}

export default function LocaleLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const locale = useLocale();

    return (
        <html lang={locale}>
        <body>
            {children}
        </body>
        </html>
    )
}
