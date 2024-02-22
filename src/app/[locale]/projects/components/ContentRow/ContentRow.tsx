'use client';

import cn from 'classnames'

import styles from './ContentRow.module.scss';
import DescriptionWrapper from "@/app/[locale]/projects/components/DescriptionWrapper/DescriptionWrapper";
import {CombinedProjectItemContent} from "@/projectsData";
import {isMobile} from "@/helpers";

interface Props {
    data: any[];
}

const ContentRow = ({data}: Props) => {
    return (
        <div className={cn(styles.root, 'box')}>
            {data.map(({desc, src, srcM, descAlign, height}, index) => (
                <DescriptionWrapper
                    className={styles.wrapper}
                    desc={desc}
                    descAlign={isMobile() ? 'center' : descAlign}
                    key={index}
                >
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
