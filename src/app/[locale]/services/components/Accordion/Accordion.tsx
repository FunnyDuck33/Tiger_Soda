'use client';

import cn from 'classnames'

import arrowSvg from './assets/arrow.svg';

import styles from './Accordion.module.scss';
import {MouseEventHandler, ReactEventHandler, SyntheticEvent, useCallback, useRef} from "react";
import {useTranslations} from "next-intl";
import {CombinedProjectItem} from "@/projectsData";
import Examples from "../Examples/Examples";

interface Props {
    number: number;
    title: string;
    text: string;
    examples?: CombinedProjectItem[];
    showBottomDivider?: boolean;
}

const Accordion = ({number, title, examples, text, showBottomDivider}: Props) => {
    const t = useTranslations('Services');
    const root = useRef<HTMLDivElement>(null);
    const bottomWrapper = useRef<HTMLDivElement>(null);
    const bottomInnerWrapper = useRef<HTMLDivElement>(null);

    const clickHandler = useCallback((e: SyntheticEvent<HTMLDivElement>) => {
        const rootEl = root.current;
        const bottomWrapperEl = bottomWrapper.current;
        const bottomInnerWrapperEl = bottomInnerWrapper.current;

        if (bottomWrapperEl) {
            bottomWrapperEl.style.height = `${bottomInnerWrapperEl?.clientHeight || 0}rem`;
        }

        rootEl?.classList.toggle(styles.root_hidden);

    }, []);

    return (
        <div className={cn(styles.root, styles.root_hidden, 'box')} ref={root}>
            <div className={styles.divider}></div>
            <div className={styles.topWrapper} onClick={clickHandler}>
                <div className={styles.titleWrapper}>
                    <div className={styles.number}>{`0${number}`}</div>
                    <div className={styles.title}>{title}</div>
                </div>
                <img src={arrowSvg.src} alt="" className={styles.arrow}/>
            </div>
            <div className={styles.bottomWrapper} ref={bottomWrapper}>
                <div className={styles.bottomInnerWrapper} ref={bottomInnerWrapper}>
                    <div className={styles.text} dangerouslySetInnerHTML={{__html: text}} />
                    <div className={styles.examplesWrapper}>
                        <div className={styles.examplesTitle}>{`${t('examplesTitle')}:`}</div>
                        {examples?.length && (
                            <Examples data={examples} />
                        )}
                    </div>
                </div>
            </div>
            {showBottomDivider && <div className={styles.divider}></div>}
        </div>
    )
}

export default Accordion;
