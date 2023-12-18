'use client';

import cn from 'classnames'

import styles from './Text.module.scss';
import {isMobile} from "@/helpers";

interface Props {
    title: string;
    className?: string;
    content: string[];
    isColumns?: boolean;
}

const Text = ({title, className, content, isColumns}: Props) => {
    return (
        <div className={cn(styles.root, 'box', className)}>
            <div className={styles.title}>{title}</div>
            <div className={styles.contentWrapper}>
                <div className={cn(styles.content, isColumns && styles.content_columns)} dangerouslySetInnerHTML={{__html: content}}/>
            </div>
        </div>
    )
}

export default Text;
