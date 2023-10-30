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

    return (
        <div className={cn(styles.root, theme === 'white' ? styles.root_theme_white : styles.root_theme_black)}>
            <Link href={pathname} locale='en' className={styles.link}>
                <div className={cn(styles.language, locale === 'en' && styles.language_active)}>
                    EN
                </div>
            </Link>
            <div className={styles.divider}></div>
            <Link href={pathname} locale='es' className={styles.link}>
                <div className={cn(styles.language, locale === 'es' && styles.language_active)}>
                    ESP
                </div>
            </Link>
        </div>
    )
}

export default LocalePicker;
