'use client';

import styles from './Projects.module.scss';
import Link from "next-intl/link";
import {useTranslations} from "next-intl";
import cn from "classnames";

import floaty8 from '@/../public/assets/floaties/floaty-8.png';
import floaty7 from '@/../public/assets/floaties/floaty-7.png';
import {useProject} from "@/projectsData";

interface Props {
    data: any[];
}

const Projects = ({data}: Props) => {
    const t = useTranslations('Creators');

    return (
        <div className={styles.root}>
            <div className={styles.title}>
                {t("projectsTitle")}
            </div>
            <div className={cn(styles.wrapper, 'box')}>
                {data?.map(({title, link, src}, index) => (
                    <Link href={link} className={styles.link} key={index}>
                        <div className={styles.itemWrapper}>
                            <img src={src} alt="" className={styles.itemImg}/>
                            <div className={styles.desc}>{useProject(title).previewTitle}</div>
                        </div>
                    </Link>
                ))}
                <div>
                    <img className={cn(styles.floaty, styles.floaty1)} src={floaty8.src} alt=""/>
                    <img className={cn(styles.floaty, styles.floaty2)} src={floaty7.src} alt=""/>
                    <div className={cn(styles.floaty, styles.floaty_circle, styles.floaty3)}/>
                    <div className={cn(styles.floaty, styles.floaty_circle, styles.floaty4)}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;
