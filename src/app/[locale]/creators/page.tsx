'use client';


import floaty2 from '@/../public/assets/floaties/floaty-2.png';
import floaty3 from '@/../public/assets/floaties/floaty-3.png';
import floaty4 from '@/../public/assets/floaties/floaty-4.png';
import floaty5 from '@/../public/assets/floaties/floaty-5.png';

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

import styles from './page.module.scss'
import BlockHeader from "@/components/BlockHeader/BlockHeader";
import cn from "classnames";
import ImageItem from "@/components/ImageItem/ImageItem";
import {isMobile} from "@/helpers";
import {useTranslations} from "next-intl";
import {useCreators} from "@/creatorsData";

interface Props {
    params: {
        locale: string;
    }
}

export default function Creators({params}: Props) {
    const creators = useCreators();
    const t = useTranslations(`Creators`);

    return (
        <div className={styles.root}>
            <Navigation withLogo={true} theme='white' locale={params.locale}/>
            <BlockHeader title={t('title')} className={cn('box', styles.blockHeader)} titleClassName={styles.title}/>
            <div className={cn('box', styles.itemsWrapper)}>
                {Object.values(creators).map(({link, src, title, desc}, index) => (
                    <ImageItem key={index} src={src} title={title} desc={desc} link={link} size={isMobile() ? 'm' : 's'}/>
                ))}
                {!isMobile() && (
                    <>
                        <img src={floaty2.src} alt="" className={cn(styles.floaty, styles.floaty2)}/>
                        <img src={floaty3.src} alt="" className={cn(styles.floaty, styles.floaty3)}/>
                        <img src={floaty4.src} alt="" className={cn(styles.floaty, styles.floaty4)}/>
                        <img src={floaty5.src} alt="" className={cn(styles.floaty, styles.floaty5)}/>
                    </>
                )}
            </div>
            <Footer/>
        </div>
    )
}
