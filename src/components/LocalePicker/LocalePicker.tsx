'use client';

import Link from 'next-intl/link';

import cn from 'classnames'

import {usePathname} from 'next-intl/client';

import styles from './LocalePicker.module.scss';

interface Props {
    locale: string;
    theme: 'black' | 'white';
}

const LocalePicker = ({locale, theme}: Props) => {
    const pathname = usePathname();

    const renderLocale = (isActive: boolean, locale: string) => {
        return (
            <div className={cn(styles.language, isActive && styles.language_active)}>
                {locale}
            </div>
        )
    }

    return (
        <div className={cn(styles.root, theme === 'white' ? styles.root_theme_white : styles.root_theme_black)}>
            {locale === 'en' ? renderLocale(true, 'EN') : (
                <Link href={pathname} locale='en' className={styles.link}>
                    {renderLocale(false, 'EN')}
                </Link>
            )}
            <div className={styles.divider}></div>
            {locale === 'es' ? renderLocale(true, 'ESP') : (
                <Link href={pathname} locale='es' className={styles.link}>
                    {renderLocale(false, 'ESP')}
                </Link>
            )}
        </div>
    )
}

export default LocalePicker;
