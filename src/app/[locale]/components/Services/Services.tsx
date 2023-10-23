import cn from 'classnames'

import BlockHeader from "@/app/[locale]/components/BlockHeader/BlockHeader";

import tiger from './assets/tiger.png';

import {useTranslations} from "next-intl";

import styles from './Services.module.css';

interface ListData {
    title: string;
    desc: string;
}

const Services = () => {
    const t = useTranslations('Index.Services');
    const data: ListData[] = t.raw('data');

    return (
        <div className={cn(styles.root, 'wide_padding')}>
            <BlockHeader title={t('title')} buttonTitle={t('button')} link='/'/>
            <img src={tiger.src} alt="" className={styles.tiger}/>
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
        </div>
    )
}

export default Services;
