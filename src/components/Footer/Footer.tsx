'use client';

import cn from "classnames";

import background from './assets/background.png';
import backgroundM from './assets/background-m.png';
import floaty from './assets/floaty.png';

import {useTranslations} from "next-intl";

import styles from './Footer.module.scss';
import {isMobile} from "@/helpers";


const Footer = () => {
    const t = useTranslations('Footer');

    return (
        <div className={cn(styles.root, 'wide')} id="contactUsForm">
            <div className={styles.title} dangerouslySetInnerHTML={{__html: t('title')}}/>
            <div className={styles.desc} dangerouslySetInnerHTML={{__html: t('desc')}}/>
            <form action="/" className={styles.form}>
                <input type="text" className={styles.input} placeholder={`${t('name')}`}/>
                <input type="text" className={styles.input} required={true} placeholder={`${t('email')}`}/>
                <input type="text" className={styles.input} placeholder={`${t('company')}`}/>
                <textarea className={cn(styles.input, styles.area)} placeholder={t('message')}/>
                <button type='submit' className={styles.button}>{t('button')}</button>
            </form>
            <div className={styles.backgorundWrapper}>
                <img src={isMobile() ? backgroundM.src : background.src} alt="" className={styles.background}/>
            </div>
            <img src={floaty.src} alt="" className={styles.floaty}/>
        </div>
    )
}

export default Footer;
