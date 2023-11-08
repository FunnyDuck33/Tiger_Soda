'use client';


import styles from './Examples.module.scss';
import ImageItem from "@/components/ImageItem/ImageItem";
import {CombinedProjectItem} from "@/projectsData";

interface Props {
    data: CombinedProjectItem[];
}

const Examples = ({data}: Props) => {
    return (
        <div className={styles.root} >
            {data.map(({src, title, link}) => (
                <ImageItem src={src} title={title} link={link} size='xxxs' position='row' />
            ))}
        </div>
    )
}

export default Examples;
