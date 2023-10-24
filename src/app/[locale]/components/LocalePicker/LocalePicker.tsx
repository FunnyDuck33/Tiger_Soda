'use client';

import Link from 'next-intl/link';

import cn from 'classnames'

import {usePathname} from 'next-intl/client';

import styles from './LocalePicker.module.scss';

interface Props {
    locale: string;
}

const LocalePicker = ({locale}: Props) => {
    const pathname = usePathname();

    return (
        <div className={styles.root}>
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
