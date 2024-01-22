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
    externalLink?: string;
}

const Header = ({locale, titleImage, tags, title, titleM, titleText, type, externalLink}: Props) => {
    const typeClasses = {
        project: styles.root_type_project,
        creator: styles.root_type_creator,
    }

    return (
        <div className={cn(styles.root, 'wide_padding', typeClasses[type])}>
            <div className={styles.wrapper}>
                <Navigation withLogo={true} theme='black' locale={locale}/>
                <div className={styles.title}>
                    {externalLink ? (
                        <a href={externalLink} target="_blank">
                            <span dangerouslySetInnerHTML={{__html: isMobile() && titleM ? titleM : title}}/>
                            <span><img src={arrowSvg.src} alt="" className={styles.arrow}/></span>
                        </a>
                    ) : (
                        <span dangerouslySetInnerHTML={{__html: isMobile() && titleM ? titleM : title}}/>
                    )}
                </div>
                {titleText && <div className={styles.text} dangerouslySetInnerHTML={{__html: titleText}}></div>}
                <div className={styles.tagsWrapper}>
                    {tags?.map((tag, index) => (
                        <div key={index} className={styles.tag}>{tag}</div>
                    ))}
                </div>
                <div className={styles.itemWrapper}>
                    <img
                        className={styles.item}
                        alt=""
                        src={isMobile() && titleImage?.srcM ? titleImage?.srcM : titleImage?.src }
                        style={getStyleObject(isMobile() ? titleImage.stylesM : titleImage.styles)}
                    />
                    {titleImage?.floatySrc && (
                        <img
                            className={styles.floatyItem}
                            alt=""
                            src={titleImage.floatySrc}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;
