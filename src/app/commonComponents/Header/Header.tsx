'use client';

import cn from "classnames";

import Navigation from "@/components/Navigation/Navigation";

import arrowSvg from '@/../public/assets/arrow-white.svg';

import {getStyleObject, isMobile} from "@/helpers";

import {TitleImage} from "@/types";
import styles from './Header.module.scss';

interface Props {
    locale: string;
    titleImage: TitleImage;
    tags: string[];
    title: string;
    titleText?: string
    titleM?: string;
    showArrow?: boolean
    type: 'project' | 'creator';
}

const Header = ({locale, titleImage, tags, title, titleM, titleText, type}: Props) => {
    const typeClasses = {
        project: styles.root_type_project,
        creator: styles.root_type_creator,
    }

    return (
        <div className={cn(styles.root, 'wide_padding', typeClasses[type])}>
            <Navigation withLogo={true} theme='black' locale={locale}/>
            <div className={styles.title}>
                <span dangerouslySetInnerHTML={{__html: isMobile() && titleM ? titleM : title}}/>
                {type !== 'creator' && <span><img src={arrowSvg.src} alt="" className={styles.arrow}/></span>}
            </div>
            {titleText && <div className={styles.text} dangerouslySetInnerHTML={{__html: titleText}}></div>}
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
