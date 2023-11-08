'use client';


import floaty6 from '@/../public/assets/floaties/floaty-6.png';

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

import styles from './page.module.scss'
import BlockHeader from "@/components/BlockHeader/BlockHeader";
import cn from "classnames";
import {isMobile} from "@/helpers";
import {useTranslations} from "next-intl";
import Accordion from "@/app/[locale]/services/components/Accordion/Accordion";
import {useServices} from "@/servicesData";

interface Props {
    params: {
        locale: string;
    }
}

export default function Creators({params}: Props) {
    const t = useTranslations(`Services`);
    const data = useServices();

    return (
        <div className={styles.root}>
            <Navigation withLogo={true} theme='white' locale={params.locale}/>
            <div className={styles.headerWrapper}>
                <BlockHeader title={t('title')} className={cn('box', styles.blockHeader)} titleClassName={styles.title}/>
                <img src={floaty6.src} alt="" className={cn(styles.floaty, styles.floaty6)}/>
            </div>
            <div className={styles.contentWrapper}>
                {data.map((item, index) => (
                    <Accordion {...item} number={index + 1} showBottomDivider={index === data.length - 1}/>
                ))}
            </div>
            <Footer/>
        </div>
    )
}
