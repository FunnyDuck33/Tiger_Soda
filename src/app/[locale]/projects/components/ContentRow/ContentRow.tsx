'use client';

import cn from 'classnames'

import styles from './ContentRow.module.scss';
import DescriptionWrapper from "@/app/[locale]/projects/components/DescriptionWrapper/DescriptionWrapper";
import {CombinedProjectItemContent} from "@/data";

interface Props {
    data: CombinedProjectItemContent[];
}

const ContentRow = ({data}: Props) => {
    console.log(123, data);
    return (
        <div className={cn(styles.root, 'box')}>
            {data.map(({desc, src, descAlign, height}) => (
                <DescriptionWrapper desc={desc} descAlign={descAlign}>
                    <img src={src} alt="" className={styles.mainImg} style={{height: `${height}rem`}}/>
                </DescriptionWrapper>
            ))}
        </div>
    )
}

export default ContentRow;
