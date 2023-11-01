'use client';

import cn from 'classnames'

import styles from './ContentRow.module.scss';
import DescriptionWrapper from "@/app/[locale]/projects/components/DescriptionWrapper/DescriptionWrapper";
import {CombinedProjectItemContent} from "@/data";
import {isMobile} from "@/helpers";

interface Props {
    data: any[];
}

const ContentRow = ({data}: Props) => {
    return (
        <div className={cn(styles.root, 'box')}>
            {data.map(({desc, src, srcM, descAlign, height}) => (
                <DescriptionWrapper className={styles.wrapper} desc={desc} descAlign={isMobile() ? 'center' : descAlign}>
                    <img
                        className={styles.mainImg} style={isMobile() ? {} : {height: `${height}rem`}}
                        src={isMobile() && srcM ? srcM : src}
                        alt=""
                    />
                </DescriptionWrapper>
            ))}
        </div>
    )
}

export default ContentRow;
