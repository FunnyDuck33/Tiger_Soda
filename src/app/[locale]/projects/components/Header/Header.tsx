'use client';

import cn from "classnames";

import Navigation from "@/components/Navigation/Navigation";

import arrowSvg from '@/../public/assets/arrow-white.svg';

import {useProject} from "@/projectsData";

import {getStyleObject, isMobile} from "@/helpers";

import styles from './Header.module.scss';

interface Props {
    locale: string;
    project: string;
}

const Header = ({locale, project}: Props) => {
    const {titleImage, tags, title, titleM} = useProject(project);

    return (
        <div className={cn(styles.root, 'wide_padding')}>
            <Navigation withLogo={true} theme='black' locale={locale}/>
            <div className={styles.title}>
                <span dangerouslySetInnerHTML={{__html: isMobile() && titleM ? titleM : title}}/>
                <span> <img src={arrowSvg.src} alt="" className={styles.arrow}/></span>
            </div>
            <div className={styles.tagsWrapper}>
                {tags.map((tag, index) => (
                    <div key={index} className={styles.tag}>{tag}</div>
                ))}
            </div>
            <div>
                <img src={isMobile() ? titleImage.srcM : titleImage.src } alt="" className={styles.item} style={getStyleObject(isMobile() ? titleImage.stylesM : titleImage.styles)}/>
            </div>
        </div>
    )
}

export default Header;
