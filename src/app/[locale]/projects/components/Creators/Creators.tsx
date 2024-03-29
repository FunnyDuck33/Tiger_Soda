'use client';

import styles from './Creators.module.scss';
import {Property} from "csstype";
import {useTranslations} from "next-intl";
import {CombinedProjectItemCreators} from "@/projectsData";
import ImageItem from "@/components/ImageItem/ImageItem";

interface Props {
    data: any[];
}

const Creators = ({data}: Props) => {
    const t = useTranslations('Projects');

    return (
        <div className={styles.root}>
            <div className={styles.title}>
                {t("artistsTitle")}
            </div>
            <div className={styles.wrapper}>
                {data.map(({title, link, src}, index) => (
                    <ImageItem src={src} title={title} link={link} key={index} size="xxs" />
                ))}
            </div>
        </div>
    )
}

export default Creators;
