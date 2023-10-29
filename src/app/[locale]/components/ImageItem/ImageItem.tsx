'use client';

import cn from 'classnames'

import arrowBlackSvg from './assets/arrow-black.svg';

import Link from "next-intl/link";

import styles from './ImageItem.module.scss';

interface Props {
    src: string;
    title: string;
    desc?: string;
    link: string;
    size: keyof typeof sizeClasses;
}

const sizeClasses = {
    l: styles.root_size_l,
    m: styles.root_size_m,
    s: styles.root_size_s,
    xs: styles.root_size_xs,
}

const ImageItem = ({src, title, link, size, desc}: Props) => {
    return (
        <div className={cn(styles.root, sizeClasses[size])}>
            <Link href={link} className={styles.link}>
                <div className={styles.wrapper}>
                    <img src={src} alt="" className={styles.img}/>
                    <div className={styles.title}>{title}</div>
                    {desc && <div className={styles.desc}>{desc}</div>}
                </div>
            </Link>
        </div>
    )
}

export default ImageItem;
