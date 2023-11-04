'use client';

import cn from "classnames";

import BlockHeader from "@/components/BlockHeader/BlockHeader";
import ImageItem from "@/components/ImageItem/ImageItem";

import floaty1 from '@/../public/assets/floaties/floaty-3.png';
import floaty2 from '@/../public/assets/floaties/floaty-4.png';
import floaty3 from '@/../public/assets/floaties/floaty-5.png';

import {useTranslations} from "next-intl";

import styles from './Creators.module.scss';
import {isMobile} from "@/helpers";
import {useCreators} from "@/creatorsData";

const Creators = () => {
    const t = useTranslations('Creators');
    const creators = useCreators();

    return (
        <div className={cn(styles.root, isMobile() && 'wide')}>
            <BlockHeader title={t('title')} buttonTitle={isMobile() ? undefined : t('button')} link='/'/>
            <div className={styles.wrapper}>
                {Object.values(creators).map(({title, desc, src, link}, i) => (
                    <ImageItem key={title} src={src} title={title} desc={desc} link={link} size={isMobile() ? 'xs' : 's'}/>
                ))}
            </div>
            {!isMobile() && (
                <>
                    <img src={floaty1.src} alt="" className={cn(styles.floaty, styles.floaty1)}/>
                    <img src={floaty2.src} alt="" className={cn(styles.floaty, styles.floaty2)}/>
                    <img src={floaty3.src} alt="" className={cn(styles.floaty, styles.floaty3)}/>
                </>
            )}
            {isMobile() && <BlockHeader buttonTitle={t('button')} link='/'/>}
        </div>
    )
}

export default Creators;
