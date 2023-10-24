'use client';

import cn from 'classnames'

import project1 from './assets/project-1.png';
import project2 from './assets/project-2.png';
import project3 from './assets/project-3.png';

import floaty from './assets/floaty.png';

import BlockHeader from "@/app/[locale]/components/BlockHeader/BlockHeader";

import {useTranslations} from "next-intl";

import styles from './Projects.module.scss';
import ImageItem from "@/app/[locale]/components/ImageItem/ImageItem";
import {isMobile} from "@/helpers";

const data = [
    {
        src: project1.src,
        link: '/',
    },
    {
        src: project2.src,
        link: '/',
    },
    {
        src: project3.src,
        link: '/',
    },
]

const Projects = () => {
    const t = useTranslations('Index.Projects');
    const banners = t.raw('banners');

    return (
        <div className={cn(styles.root, 'box')}>
            <BlockHeader
                title={t('title')}
                buttonTitle={isMobile() ? undefined : t('button')}
                link='/'
            />
            <div className={styles.bottomWrapper}>
                {data.map(({src, link}, index) => (
                    <ImageItem key={src} src={src} title={banners[index]} link={link} size={isMobile() ? 'm': 'l'}/>
                ))}
            </div>
            {!isMobile() && <img src={floaty.src} alt="" className={styles.floaty}/>}
            {isMobile() && <BlockHeader buttonTitle={t('button')} link='/'/>}
        </div>
    )
}

export default Projects;
