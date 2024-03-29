'use client';

import cn from 'classnames'

import {isMobile} from "@/helpers";

import BlockHeader from "@/components/BlockHeader/BlockHeader";

import tiger from './assets/tiger.png';
import tigerM from './assets/tiger-m.png';

import {useTranslations} from "next-intl";

import styles from './Services.module.scss';

interface ListData {
    title: string;
    desc: string;
}

const Services = () => {
    const t = useTranslations('Services');
    const data: ListData[] = Object.values(t.raw('list'));

    return (
        <div className={cn(styles.root, isMobile() ? 'wide' : 'wide_padding')}>
            <BlockHeader title={t('title')} buttonTitle={isMobile() ? undefined : t('button')} link='/services'/>
            <img src={isMobile() ? tigerM.src : tiger.src} alt="" className={styles.tiger}/>
            <div className={styles.wrapper}>
                { data.map(({title, desc}, index) => (
                    <div className={styles.item} key={title}>
                        <div className={styles.itemCount}>0{index + 1}</div>
                        <div className={styles.itemWrapper}>
                            <div className={styles.itemTitle}>{title}</div>
                            <div className={styles.itemDesc} dangerouslySetInnerHTML={{__html: desc}}/>
                        </div>
                    </div>
                ))}
            </div>
            {isMobile() && <BlockHeader buttonTitle={t('button')} link='/services'/>}
        </div>
    )
}

export default Services;
