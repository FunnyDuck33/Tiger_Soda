'use client';

import Header from "@/app/commonComponents/Header/Header";
import Text from "../components/Text/Text";
import Creators from "../components/Creators/Creators";
import Footer from "@/components/Footer/Footer";
import ContentRow from "../components/ContentRow/ContentRow";
import Navigator from "../components/Navigator/Navigator";

import styles from './page.module.scss'

import {useProject} from "@/projectsData";
import {useTranslations} from "next-intl";
import {isMobile} from "@/helpers";

import PageWrapper from "@/app/commonComponents/PageWrapper/PageWrapper";

interface Props {
    params: {
        project: string;
        locale: string;
    }
}

export default function Project({params}: Props) {
    const t = useTranslations('Projects');
    const {locale, project} = params;
    const projectData = useProject(project);
    const {taskSrc, cover, ideas, content, creators, earlyContent} = useProject(project);

    return (
        <PageWrapper>
            <div className={styles.root}>
                <Header locale={locale} type="project" {...projectData}/>
                <Text
                    title={t("coverTitle")}
                    content={[cover.text]}
                    src={cover.src}
                    srcStyles={isMobile() ? cover.stylesM : cover.styles }
                    className={styles.cover}
                />
                {taskSrc && (
                    <img src={taskSrc} alt="" className={styles.img}/>
                )}
                {earlyContent?.map((contentRow, index) => (
                    <ContentRow data={contentRow} key={index}/>
                ))}
                <Text title={t("ideasTitle")} content={ideas} className={styles.ideas} isColumns={true}/>
                {content.map((contentRow, index) => (
                    <ContentRow data={contentRow} key={index}/>
                ))}
                {creators && <Creators data={creators}/>}
                <Navigator project={project}/>
                <Footer/>
            </div>
        </PageWrapper>
    )
}
