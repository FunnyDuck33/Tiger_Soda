'use client';

import cn from 'classnames'

import styles from './ContentRow.module.scss';
import DescriptionWrapper from "@/app/[locale]/projects/components/DescriptionWrapper/DescriptionWrapper";
import {getStyleObject, isMobile} from "@/helpers";

interface Props {
    data: any[];
}

const ContentRow = ({data}: Props) => {
    return (
        <div className={cn(styles.root, 'box')}>
            {data.map((content, index) => (
                <DescriptionWrapper
                    className={styles.wrapper}
                    desc={content.desc}
                    descAlign={isMobile() ? 'center' : content.descAlign}
                    key={index}
                >
                    <img
                        className={styles.mainImg} style={isMobile() ? {} : getStyleObject(content.styles)}
                        src={isMobile() && content.srcM ? content.srcM : content.src}
                        alt=""
                    />
                </DescriptionWrapper>
            ))}
        </div>
    )
}

export default ContentRow;
