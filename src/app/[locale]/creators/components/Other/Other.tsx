'use client';

import styles from './Other.module.scss';
import {useTranslations} from "next-intl";
import cn from "classnames";
import {isMobile} from "@/helpers";

interface Props {
    data: any[];
}

const Other = ({data}: Props) => {
    const t = useTranslations('Creators');

    return (
        <div className={styles.root}>
            <div className={styles.title}>
                {t("otherTitle")}
            </div>
            <div className={cn(styles.wrapper, 'box')}>
                {data?.map(({link, src}, index) => (
                    <a href={link} className={styles.link} key={index}>
                        <img src={src} alt="" className={styles.item}/>
                    </a>
                ))}
            </div>
            {isMobile() && <span className={styles.info}>{t("swipeInfo")}</span>}
        </div>
    )
}

export default Other;
