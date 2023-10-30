'use client';

import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";

import styles from './page.module.scss'

import {useTranslations} from "next-intl";

interface Props {
    params: {
        project: string;
        locale: string;
    }
}

export default function Projects({params}: Props) {
    const {locale, project} = params;
    const t = useTranslations('Projects');
    const i18nData = t.raw('list');

    return (
        <div className={styles.root}>
            <Header locale={locale} project={project}/>
            <Footer/>
        </div>
    )
}
