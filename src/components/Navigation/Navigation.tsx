'use client';

import {useTranslations} from "next-intl";
import {isMobile} from "@/helpers";
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import {useCallback} from "react";

import titleSvg from '@/../public/assets/title.svg';
import titleBlackSvg from '@/../public/assets/title-black.svg';
import LocalePicker from "@/components/LocalePicker/LocalePicker";
import Link from 'next-intl/link';

import burger from './assets/burger.svg';
import burgerBlack from './assets/burger-black.svg';

import styles from './Navigation.module.scss';

interface Props {
    locale: string;
    withLogo?: boolean;
    theme: 'black' | 'white';
}

const Navigation = ({locale, withLogo, theme}: Props) => {
    const t = useTranslations('Index.Navigation');
    const pathname = usePathname();

    const isActive = useCallback((link: string) => {
        const pathWithoutLocale = pathname.split('/')[2] || '';

        return pathWithoutLocale === link.slice(1)
    }, [pathname])

    const items = [
        {
            link: '/',
            text: t('about'),
        },
        {
            link: '/projects',
            text: t('projects'),
        },
        {
            link: '/asd',
            text: t('services'),
        },
        {
            link: '/zxc',
            text: t('creators'),
        },
    ]

    const content = (
        <>
            {!isMobile() && (
                <nav className={styles.nav}>
                    {items.map(({link, text}, index) => (
                        <Link key={index} className={styles.links} href={link}>
                            <div className={cn(styles.navItem, isActive(link) && styles.navItem_active)}>{text}</div>
                        </Link>
                    ))}
                </nav>
            )}
            <div className={styles.menu}>
                {!isMobile() && <div className={styles.contactButton}>{t('contacts')}</div>}
                {(!isMobile() || !withLogo) && <LocalePicker theme={theme} locale={locale}/>}
                {isMobile() && <img src={theme === 'black' ?  burger.src : burgerBlack.src} alt="" className={styles.burger}/>}
            </div>
        </>
    );

    return (
        <div className={cn(
            styles.root,
            'wide_padding',
            theme === 'white' ? styles.root_theme_white : styles.root_theme_black,
            withLogo && styles.root_withLogo
        )}>
            {withLogo ? (
                <>
                    <img src={theme === 'black' ? titleSvg.src : titleBlackSvg.src} alt="" className={styles.logo}/>
                    <div className={styles.wrapper}>
                        {content}
                    </div>
                </>
            ) : content}
        </div>
    )
}

export default Navigation;
