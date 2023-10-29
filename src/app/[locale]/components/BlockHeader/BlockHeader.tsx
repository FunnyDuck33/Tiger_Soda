'use client';

import arrowWhiteSvg from './assets/arrow-white.svg';
import cn from 'classnames';

import Link from "next-intl/link";

import styles from './BlockHeader.module.scss';

interface Props {
    title?: string;
    buttonTitle?: string;
    link?: string;
    className?: string;
    titleClassName?: string;
}

const BlockHeader = ({title, buttonTitle, link, className, titleClassName}: Props) => {
    return (
        <div className={cn(styles.root, className)}>
            {title && <div className={cn(styles.title, titleClassName)}>{title}</div>}
            {buttonTitle && link && (
                <Link href={link} className={styles.link}>
                    <div className={styles.button}>
                        {buttonTitle}
                        <img src={arrowWhiteSvg.src} alt="" className={styles.arrow}/>
                    </div>
                </Link>
            ) }
        </div>
    )
}

export default BlockHeader;
