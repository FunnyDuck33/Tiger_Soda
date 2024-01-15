'use client';

import {useTranslations} from "next-intl";
import {isMobile} from "@/helpers";
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import {useCallback, useState} from "react";

import titleSvg from '@/../public/assets/title.svg';
import titleBlackSvg from '@/../public/assets/title-black.svg';
import LocalePicker from "@/components/LocalePicker/LocalePicker";
import Link from 'next-intl/link';

import close from './assets/close.svg';
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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = useCallback((link: string) => {
        const pathWithoutLocale = pathname.split('/')[2] || '';

        return pathWithoutLocale === link.slice(1)
    }, [pathname]);

    const onOpenClick = useCallback(() => {
        setIsMenuOpen(true);
    }, []);


    const onCloseClick = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

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
            link: '/services',
            text: t('services'),
        },
        {
            link: '/creators',
            text: t('creators'),
        },
    ]

    const mobileItems = [
        ...items,
        {
            link: '/bbb',
            text: t('contacts'),
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
                {isMobile() ? (
                    <>
                        {!withLogo && <LocalePicker theme={theme} locale={locale}/>}
                        <img src={theme === 'black' ?  burger.src : burgerBlack.src} alt="" className={styles.burger} onClick={onOpenClick}/>
                        {isMenuOpen && (
                            <div className={styles.mobileMenu}>
                                <div className={styles.topWrapper}>
                                    <LocalePicker theme="black" locale={locale}/>
                                    <img src={close.src} alt="" className={styles.burger} onClick={onCloseClick}/>
                                </div>
                                <nav className={styles.nav}>
                                    {mobileItems.map(({link, text}, index) => (
                                        <Link key={index} className={styles.links} href={link}>
                                            <div className={cn(styles.navItem, isActive(link) && styles.navItem_active)}>{text}</div>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <div className={styles.contactButton}>{t('contacts')}</div>
                        <LocalePicker theme={theme} locale={locale}/>
                    </>
                )}
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
                    <Link href='/'>
                        <img src={theme === 'black' ? titleSvg.src : titleBlackSvg.src} alt="" className={styles.logo}/>
                    </Link>
                    <div className={styles.wrapper}>
                    {content}
                    </div>
                </>
            ) : content}
        </div>
    )
}

export default Navigation;
