'use client';

import cn from 'classnames'

import {useTranslations} from "next-intl";

import floaty from '@/../public/assets/floaties/floaty-7.png';

import styles from './Cover.module.scss';


const Cover = () => {
    const t = useTranslations('Index');
    return (
        <div className={cn(styles.root, 'box')}>
            <div className={styles.content}
                 dangerouslySetInnerHTML={{__html: t('Cover')}}
            />
            <img src={floaty.src} alt="" className={styles.floaty}/>
        </div>
    )
}

export default Cover;
