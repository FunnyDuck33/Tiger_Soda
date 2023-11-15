'use client';

import {useProjects} from "@/projectsData";

import floaty1 from '@/../public/assets/floaties/floaty.png';
import floaty2 from '@/../public/assets/floaties/floaty-2.png';

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

import styles from './page.module.scss'
import BlockHeader from "@/components/BlockHeader/BlockHeader";
import cn from "classnames";
import ImageItem from "@/components/ImageItem/ImageItem";
import {isMobile} from "@/helpers";
import {useTranslations} from "next-intl";

interface Props {
    params: {
        locale: string;
    }
}

export default function Projects({params}: Props) {
    const projects = useProjects();
    const t = useTranslations(`Projects`);

    return (
        <div className={styles.root}>
            <Navigation withLogo={true} theme='white' locale={params.locale}/>
            <BlockHeader title={t('title')} className={cn('box', styles.blockHeader)} titleClassName={styles.title}/>
            <div className={cn('box', styles.itemsWrapper)}>
                {Object.values(projects).slice(0, 3).map(({link, src, previewTitle}, index) => (
                    <ImageItem key={index} src={src} title={previewTitle} link={link} size={isMobile() ? 'm' : 'l'}/>
                ))}
                {!isMobile() && (
                    <>
                        <img src={floaty1.src} alt="" className={cn(styles.floaty, styles.floaty1)}/>
                        <img src={floaty2.src} alt="" className={cn(styles.floaty, styles.floaty2)}/>
                    </>
                )}
            </div>
            <Footer/>
        </div>
    )
}
