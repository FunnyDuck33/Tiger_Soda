import cn from "classnames";

import BlockHeader from "@/app/[locale]/components/BlockHeader/BlockHeader";
import ImageItem from "@/app/[locale]/components/ImageItem/ImageItem";

import author1 from "@/app/[locale]/components/Creators/assets/author-1.png";
import author2 from "@/app/[locale]/components/Creators/assets/author-2.png";
import author3 from "@/app/[locale]/components/Creators/assets/author-3.png";
import author4 from "@/app/[locale]/components/Creators/assets/author-4.png";

import floaty1 from "@/app/[locale]/components/Creators/assets/floaty-1.png";
import floaty2 from "@/app/[locale]/components/Creators/assets/floaty-2.png";
import floaty3 from "@/app/[locale]/components/Creators/assets/floaty-3.png";

import {useTranslations} from "next-intl";

import styles from './Creators.module.css';

interface ListData {
    title: string;
    desc: string;
}

const imageData = [
    {
        src: author1.src,
        link: '/',
    },
    {
        src: author2.src,
        link: '/',
    },
    {
        src: author3.src,
        link: '/',
    },
    {
        src: author4.src,
        link: '/',
    },
]

const Creators = () => {
    const t = useTranslations('Index.Creators');
    const data: ListData[] = t.raw('data');

    return (
        <div className={styles.root}>
            <BlockHeader title={t('title')} buttonTitle={t('button')} link='/'/>
            <div className={styles.wrapper}>
                {data.map(({title, desc}, i) => (
                    <ImageItem src={imageData[i].src} title={title} desc={desc} link={imageData[i].link} size='s'/>
                ))}
            </div>
            <img src={floaty1.src} alt="" className={cn(styles.floaty, styles.floaty1)}/>
            <img src={floaty2.src} alt="" className={cn(styles.floaty, styles.floaty2)}/>
            <img src={floaty3.src} alt="" className={cn(styles.floaty, styles.floaty3)}/>
        </div>
    )
}

export default Creators;
