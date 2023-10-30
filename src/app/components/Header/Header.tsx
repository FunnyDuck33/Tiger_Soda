'use client';

import cn from "classnames";

import Navigation from "@/components/Navigation/Navigation";

import titleSvg from '../../../../public/assets/title.svg';
import tiger from '@/app/components/Header/assets/tiger.png';
import background from '@/app/components/Header/assets/background.png';
import backgroundM from '@/app/components/Header/assets/background-m.png';

import {useTranslations} from "next-intl";

import {isMobile} from "@/helpers";

import styles from './Header.module.scss';

interface Props {
    locale: string;
}

const Header = ({locale}: Props) => {
    const t = useTranslations('Index.Header');

    return (
        <div className={cn(styles.root, 'wide_padding')}>
            <Navigation theme='black' locale={locale}/>
            <img src={titleSvg.src} alt="tiger soda" className={styles.title}/>
            <div className={styles.desc}>
                {t('desc')}
            </div>
            <div className={styles.backgroundWrapper}>
                <img src={isMobile() ? backgroundM.src : background.src} alt="" className={styles.background}/>
            </div>
            <img src={tiger.src} alt="" className={styles.tiger}/>
        </div>
    )
}

export default Header;
