'use client';

import cn from 'classnames'

import Link from "next-intl/link";

import styles from './ImageItem.module.scss';

interface Props {
    src: string;
    title: string;
    desc?: string;
    link: string;
    size: keyof typeof sizeClasses;
    position?: keyof typeof positionClasses;
    isInlineArrow?: boolean
}

const sizeClasses = {
    l: styles.root_size_l,
    m: styles.root_size_m,
    s: styles.root_size_s,
    xs: styles.root_size_xs,
    xxs: styles.root_size_xxs,
    xxxs: styles.root_size_xxxs,
}
const positionClasses = {
    row: styles.root_position_row,
    column: styles.root_position_column,
}

const ImageItem = ({src, title, link, size, desc, position = 'column', isInlineArrow}: Props) => {
    return (
        <div className={cn(styles.root, sizeClasses[size], positionClasses[position], isInlineArrow && styles.root_inlineArrow)}>
            <Link href={link} className={styles.link}>
                <div className={styles.wrapper}>
                    <img src={src} alt="" className={styles.img}/>
                    <div className={styles.title} dangerouslySetInnerHTML={{__html: title}} />
                    {desc && <div className={styles.desc}>{desc}</div>}
                </div>
            </Link>
        </div>
    )
}

export default ImageItem;
