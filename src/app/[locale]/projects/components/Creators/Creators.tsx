'use client';

import styles from './Creators.module.scss';
import {Property} from "csstype";
import {useTranslations} from "next-intl";
import {CombinedProjectItemCreators} from "@/data";
import ImageItem from "@/components/ImageItem/ImageItem";

interface Props {
    data: CombinedProjectItemCreators[];
}

const Creators = ({data}: Props) => {
    const t = useTranslations('Projects');

    return (
        <div className={styles.root}>
            <div className={styles.title}>
                {t("artistsTitle")}
            </div>
            <div className={styles.wrapper}>
                {data.map(({name, link, src}) => (
                    <ImageItem src={src} title={name} link={link} size="xxs" />
                ))}
            </div>
        </div>
    )
}

export default Creators;
