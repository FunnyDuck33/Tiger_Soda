import cn from 'classnames'

import project1 from './assets/project-1.png';
import project2 from './assets/project-2.png';
import project3 from './assets/project-3.png';

import floaty from './assets/floaty.png';

import BlockHeader from "@/app/[locale]/components/BlockHeader/BlockHeader";

import {useTranslations} from "next-intl";

import styles from './Projects.module.css';
import ImageItem from "@/app/[locale]/components/ImageItem/ImageItem";

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
            <BlockHeader title={t('title')} buttonTitle={t('button')} link='/'/>
            <div className={styles.bottomWrapper}>
                {data.map(({src, link}, index) => (
                    <ImageItem key={src} src={src} title={banners[index]} link={link} size='l'/>
                ))}
            </div>
            <img src={floaty.src} alt="" className={styles.floaty}/>
        </div>
    )
}

export default Projects;
