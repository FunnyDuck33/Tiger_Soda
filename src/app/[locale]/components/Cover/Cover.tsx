import cn from 'classnames'

import {useTranslations} from "next-intl";

import floaty from './assets/floaty.png';

import styles from './Cover.module.scss';


const Cover = () => {
    const t = useTranslations('Index');
    return (
        <div className={cn(styles.root, 'box')}>
            <div className={styles.content}
                 dangerouslySetInnerHTML={{__html: t('Cover')}}
            />
            <img src={floaty.src} alt="" className={styles.floaty}/>
        </div>
    )
}

export default Cover;
