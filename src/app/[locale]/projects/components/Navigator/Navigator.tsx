'use client';

import styles from './Navigator.module.scss';
import {projectRoutes, useProject} from "@/projectsData";

import arrowSvg from '@/../public/assets/arrow-white.svg';
import arrowNavSvg from './assets/arrow.svg';

import Link from "next-intl/link";

import {useTranslations} from "next-intl";
import cn from "classnames";
import {isMobile} from "@/helpers";

interface Props {
    project: string;
}

const Navigator = ({project}: Props) => {
    const t = useTranslations('Projects');
    const {externalLink} = useProject(project);
    const prevLink = projectRoutes[projectRoutes.indexOf(project) - 1] || projectRoutes[projectRoutes.length - 1];
    const nextLink = projectRoutes[projectRoutes.indexOf(project) + 1] || projectRoutes[0];

    const prevNav = (
        <Link href={`/projects/${prevLink}`} className={styles.link}>
            <div className={styles.nav}>
                <img src={arrowNavSvg.src} alt="" className={cn(styles.navArrowLeft, styles.navArrow)}/>
                {!isMobile() && (
                    <div className={styles.navText}>
                        {t("navigatorPrevButton")}
                    </div>
                )}
            </div>
        </Link>
    );

    const nextNav = (
        <Link href={`/projects/${nextLink}`} className={styles.link}>
            <div className={styles.nav}>
                {!isMobile() && (
                    <div className={styles.navText}>
                        {t("navigatorNextButton")}
                    </div>
                )}
                <img src={arrowNavSvg.src} alt="" className={cn(styles.navArrowRight, styles.navArrow)}/>
            </div>
        </Link>
    )

    const button = (
        <Link href={externalLink || ''} target='_blank' className={styles.link}>
            <div className={styles.button}>
                {t("navigatorButton")}
                <img src={arrowSvg.src} alt="" className={styles.arrow}/>
            </div>
        </Link>
    )

    return (
        <div className={cn(styles.root, 'box')}>
            {isMobile() ? (
                <>
                    {externalLink ? button : null}
                    <div className={styles.arrowWrapper}>
                        {prevNav}
                        {nextNav}
                    </div>
                </>
            ): (
                <>
                    {prevNav}
                    {externalLink ? button : null}
                    {nextNav}
                </>
            )}
        </div>
    )
}

export default Navigator;
