import cn from "classnames";

import Navigation from "@/app/[locale]/components/Navigation/Navigation";

import titleSvg from '@/app/[locale]/components/Header/assets/title.svg';
import background from '@/app/[locale]/components/Header/assets/background.png';
import tiger from '@/app/[locale]/components/Header/assets/tiger.png';


import {useTranslations} from "next-intl";

import styles from './Header.module.css';

interface Props {
    locale: string;
}

const Header = ({locale}: Props) => {
    const t = useTranslations('Index.Header');

    return (
        <div className={cn(styles.root, 'wide_padding')}>
            <Navigation locale={locale}/>
            <img src={titleSvg.src} alt="tiger soda" className={styles.title}/>
            <div className={styles.desc}>
                {t('desc')}
            </div>
            <div className={styles.backgroundWrapper}>
                <img src={background.src} alt="" className={styles.background}/>
            </div>
            <img src={tiger.src} alt="" className={styles.tiger}/>
        </div>
    )
}

export default Header;
