'use client';

import cn from 'classnames';

import Header from "../components/Header/Header";
import Text from "../components/Text/Text";
import DescriptionWrapper from "../components/DescriptionWrapper/DescriptionWrapper";
import Footer from "@/components/Footer/Footer";

import mainImg from '@/../public/assets/projects/project1-content1.jpg';

import styles from './page.module.scss'

import {useProject} from "@/data";
import {useTranslations} from "next-intl";
import ContentRow from "@/app/[locale]/projects/components/ContentRow/ContentRow";

interface Props {
    params: {
        project: string;
        locale: string;
    }
}

export default function Projects({params}: Props) {
    const t = useTranslations('Projects');
    const {locale, project} = params;
    const {taskSrc, cover, ideas, content} = useProject(project);

    return (
        <div className={styles.root}>
            <Header locale={locale} project={project}/>
            <Text title={t("coverTitle")} content={[cover]} className={styles.cover}/>
            <img src={taskSrc} alt="" className={cn(styles.img, 'box')}/>
            <Text title={t("ideasTitle")} content={ideas} className={styles.ideas}/>
            {content.map(contentRow => (
                <ContentRow data={contentRow}/>
            ))}
            <Footer/>
        </div>
    )
}
