'use client';

import styles from './Projects.module.scss';
import Link from "next-intl/link";
import {useTranslations} from "next-intl";
import cn from "classnames";

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
                            <div className={styles.desc}>{title}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects;
