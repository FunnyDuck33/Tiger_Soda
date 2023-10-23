import cn from 'classnames';

import {useTranslations} from "next-intl";

import flakeSvg from './assets/flake.svg';

import styles from './Ticker.module.css';
import {useRef} from "react";


const Ticker = () => {
    const t = useTranslations('Index');
    const textArray = t('Ticker').split(';');

    const scroller = () => {
        const root = document.querySelector(styles.root);
        console.log(root);
        // requestAnimationFrame(scroller)
    }

    // requestAnimationFrame(scroller)

    return (
        <div className={cn(styles.root, 'wide')}>
            {textArray.map(text => (
                <div className={styles.item}>
                    {text}
                    <img src={flakeSvg.src} alt="" className={styles.flake}/>
                </div>
            ))}
        </div>
    )
}

export default Ticker;
