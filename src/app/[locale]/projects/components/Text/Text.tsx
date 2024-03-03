'use client';

import cn from 'classnames';

import {getStyleObject} from "@/helpers";

import styles from './Text.module.scss';

interface Props {
    title: string;
    src?: string;
    srcStyles?: Record<string, number>;
    className?: string;
    content: string[];
    isColumns?: boolean;
}

const Text = ({title, className, content, isColumns, src, srcStyles}: Props) => {
    return (
        <div className={cn(styles.root, 'box', className)}>
            <div className={styles.title}>{title}</div>
            <div className={styles.contentWrapper}>
                <div className={cn(styles.content, isColumns && styles.content_columns)} dangerouslySetInnerHTML={{__html: content}}/>
                {src && (
                    <img src={src} alt="" style={getStyleObject(srcStyles)}/>
                )}
            </div>
        </div>
    )
}

export default Text;
