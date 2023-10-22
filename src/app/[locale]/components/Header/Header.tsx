import {useTranslations} from "next-intl";

import styles from './Header.module.css';
import LocalePicker from "../LocalePicker/LocalePicker";

interface Props {
    locale: string;
}

const Header = ({locale}: Props) => {
    const t = useTranslations('Index.Header');

    return (
        <div className={styles.root}>
            <nav className={styles.nav}>
                <div className={styles.navItem}>{t('about')}</div>
                <div className={styles.navItem}>{t('projects')}</div>
                <div className={styles.navItem}>{t('services')}</div>
                <div className={styles.navItem}>{t('creators')}</div>
            </nav>
            <div className={styles.menu}>
                <div className={styles.contactButton}>{t('contacts')}</div>
                <LocalePicker locale={locale}/>
            </div>
        </div>
    )
}

export default Header;
