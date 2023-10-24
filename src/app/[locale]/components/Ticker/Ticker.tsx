'use client';

import cn from 'classnames';

import {useTranslations} from "next-intl";

import flakeSvg from './assets/flake.svg';

import styles from './Ticker.module.scss';
import {useRef} from "react";
import {isMobile} from "@/helpers";


const Ticker = () => {
    const t = useTranslations('Index');
    const textArray = [...t.raw('Ticker'), ...t.raw('Ticker')];
    const root = useRef<HTMLDivElement>(null);

    const scroller = () => {
        const rootEl = root.current;

        if (rootEl) {
            const scrollRemainder = rootEl.scrollWidth - rootEl.clientWidth - rootEl.scrollLeft;

            if (scrollRemainder < 10 && rootEl.firstElementChild) {
                rootEl.scrollLeft -= rootEl.firstElementChild.clientWidth;
                rootEl.append(rootEl.firstElementChild);
            } else {
                rootEl.scrollLeft += isMobile() ? 0.5 : 1;
            }
        }
        requestAnimationFrame(scroller);
    }

    requestAnimationFrame(scroller);

    return (
        <div ref={root} className={cn(styles.root, 'wide')}>
            {textArray.map((text, index) => (
                <div key={index} className={styles.item}>
                    {text}
                    <img src={flakeSvg.src} alt="" className={styles.flake}/>
                </div>
            ))}
        </div>
    )
}

export default Ticker;
