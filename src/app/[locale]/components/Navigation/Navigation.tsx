import {useTranslations} from "next-intl";
import {isMobile} from "@/helpers";

import LocalePicker from "../LocalePicker/LocalePicker";

import burger from './assets/burger.svg';

import styles from './Navigation.module.scss';

interface Props {
    locale: string;
}

const Navigation = ({locale}: Props) => {
    const t = useTranslations('Index.Navigation');

    return (
        <div className={styles.root}>
            {!isMobile() && (
                <nav className={styles.nav}>
                    <div className={styles.navItem}>{t('about')}</div>
                    <div className={styles.navItem}>{t('projects')}</div>
                    <div className={styles.navItem}>{t('services')}</div>
                    <div className={styles.navItem}>{t('creators')}</div>
                </nav>
            )}
            <div className={styles.menu}>
                {!isMobile() && <div className={styles.contactButton}>{t('contacts')}</div>}
                <LocalePicker locale={locale}/>
                {isMobile() && <img src={burger.src} alt="" className={styles.burger}/>}
            </div>
        </div>
    )
}

export default Navigation;
