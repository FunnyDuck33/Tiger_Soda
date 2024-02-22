'use client';

import styles from './Other.module.scss';
import {useTranslations} from "next-intl";
import cn from "classnames";
import {isMobile} from "@/helpers";
import floaty3 from '@/../public/assets/floaties/floaty-3.png';

interface Props {
    data: any[];
    showShortTitle?: boolean
}

const Other = ({data, showShortTitle}: Props) => {
    const t = useTranslations('Creators');

    return (
        <div className={styles.root}>
            <div className={styles.title}>
                {showShortTitle ? t("otherShortTitle") : t("otherTitle")}
            </div>
            <div className={cn(styles.wrapper, 'box')}>
                {data?.map((src, index) => (
                    <img src={src} alt="" className={styles.item} key={index}/>
                ))}
                <div>
                <div className={cn(styles.floaty, styles.floaty_circle, styles.floaty1)}/>
                    <div className={cn(styles.floaty, styles.floaty_circle, styles.floaty2)}/>
                    <div className={cn(styles.floaty, styles.floaty_circle, styles.floaty3)}/>
                    <div className={cn(styles.floaty, styles.floaty_circle, styles.floaty4)}/>
                    <div className={cn(styles.floaty, styles.floaty_circle, styles.floaty5)}/>
                    <div className={cn(styles.floaty, styles.floaty_circle, styles.floaty6)}/>
                    <div className={cn(styles.floaty, styles.floaty_circle, styles.floaty7)}/>
                    <img className={cn(styles.floaty, styles.floaty8)} src={floaty3.src} alt=""/>
                </div>
            </div>
            {isMobile() && <span className={styles.info}>{t("swipeInfo")}</span>}
        </div>
    )
}

export default Other;
