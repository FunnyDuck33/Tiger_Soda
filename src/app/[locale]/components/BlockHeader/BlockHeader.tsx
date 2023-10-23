import arrowWhiteSvg from './assets/arrow-white.svg';

import Link from "next-intl/link";

import styles from './BlockHeader.module.css';

interface Props {
    title: string;
    buttonTitle?: string;
    link?: string;
}

const BlockHeader = ({title, buttonTitle, link}: Props) => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>{title}</div>
                {buttonTitle && link && (
                    <Link href={link} className={styles.link}>
                        <div className={styles.button}>
                            {buttonTitle}
                            <img src={arrowWhiteSvg.src} alt="" className={styles.arrow}/>
                        </div>
                    </Link>
                ) }
        </div>
    )
}

export default BlockHeader;
