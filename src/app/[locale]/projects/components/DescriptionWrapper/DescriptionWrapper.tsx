'use client';

import cn from 'classnames'

import styles from './DescriptionWrapper.module.scss';
import type {ReactNode} from "react";
import {Property} from "csstype";

interface Props {
    desc?: string;
    descAlign?: Property.TextAlign;
    className?: string;
    children: ReactNode;
}

const DescriptionWrapper = ({className, children, desc, descAlign = 'left'}: Props) => {
    return (
        <div className={cn(styles.root, className)}>
            {children}
            {desc && (
                <div className={styles.desc} style={{textAlign: descAlign}}>{desc}</div>
            )}
        </div>
    )
}

export default DescriptionWrapper;
