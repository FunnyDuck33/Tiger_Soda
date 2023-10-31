'use client';

import styles from './Navigator.module.scss';
import {projectRoutes} from "@/data";

import arrowSvg from '@/../public/assets/arrow-white.svg';
import arrowNavSvg from './assets/arrow.svg';

import Link from "next-intl/link";

import {useTranslations} from "next-intl";
import cn from "classnames";

interface Props {
    project: string;
}

const Navigator = ({project}: Props) => {
    const t = useTranslations('Projects');
    const prevLink = projectRoutes[projectRoutes.indexOf(project) - 1] || projectRoutes[projectRoutes.length - 1];
    const nextLink = projectRoutes[projectRoutes.indexOf(project) + 1] || projectRoutes[0];

    return (
        <div className={cn(styles.root, 'box')}>
            <Link href={`/projects/${prevLink}`} className={styles.link}>
                <div className={styles.nav}>
                    <img src={arrowNavSvg.src} alt="" className={cn(styles.navArrowLeft, styles.navArrow)}/>
                    <div className={styles.navText}>
                        {t("navigatorPrevButton")}
                    </div>
                </div>
            </Link>
            <Link href='/projects' className={styles.link}>
                <div className={styles.button}>
                    {t("navigatorButton")}
                    <img src={arrowSvg.src} alt="" className={styles.arrow}/>
                </div>
            </Link>
            <Link href={`/projects/${nextLink}`} className={styles.link}>
                <div className={styles.nav}>
                    <div className={styles.navText}>
                        {t("navigatorNextButton")}
                    </div>
                    <img src={arrowNavSvg.src} alt="" className={cn(styles.navArrowRight, styles.navArrow)}/>
                </div>
            </Link>
        </div>
    )
}

export default Navigator;
