'use client';

import cn from 'classnames'

import {projects} from "@/data";

import floaty1 from '../../../../public/assets/floaties/floaty.png';
import floaty2 from '../../../../public/assets/floaties/floaty-2.png';

import BlockHeader from "@/components/BlockHeader/BlockHeader";

import {useTranslations} from "next-intl";

import styles from './Projects.module.scss';
import ImageItem from "@/components/ImageItem/ImageItem";
import {isMobile} from "@/helpers";

const Projects = () => {
    const t = useTranslations('Projects');
    const i18nBanners = t.raw('banners');

    return (
        <div className={cn(styles.root, 'box')}>
            <BlockHeader
                title={t('title')}
                buttonTitle={isMobile() ? undefined : t('button')}
                link='/'
            />
            <div className={styles.bottomWrapper}>
                {projects(i18nBanners).slice(0, 3).map(({src, link, title}, index) => (
                    <ImageItem key={src} src={src} title={title} link={link} size={isMobile() ? 'm': 'l'}/>
                ))}
            </div>
            {!isMobile() && (
                <>
                    <img src={floaty1.src} alt="" className={cn(styles.floaty, styles.floaty1)}/>
                    <img src={floaty2.src} alt="" className={cn(styles.floaty, styles.floaty2)}/>
                </>
            )}
            {isMobile() && <BlockHeader buttonTitle={t('button')} link='/'/>}
        </div>
    )
}

export default Projects;
