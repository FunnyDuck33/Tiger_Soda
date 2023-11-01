'use client';

import cn from 'classnames'

import styles from './Text.module.scss';
import {isMobile} from "@/helpers";

interface Props {
    title: string;
    className?: string;
    content: string[];
}

const Text = ({title, className, content}: Props) => {
    if (isMobile()) {
        content = [content.join('')];
    }

    return (
        <div className={cn(styles.root, 'box', className)}>
            <div className={styles.title}>{title}</div>
            <div className={styles.contentWrapper}>
                { content.map(contentItem => (
                    <div className={styles.content} dangerouslySetInnerHTML={{__html: contentItem}}/>
                ))}
            </div>
        </div>
    )
}

export default Text;
