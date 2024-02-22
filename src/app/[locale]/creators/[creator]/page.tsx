'use client';

import styles from './page.module.scss'

import {useCreator} from "@/creatorsData";
import {useTranslations} from "next-intl";
import Header from "@/app/commonComponents/Header/Header";
import Projects from "../components/Projects/Projects";
import Other from "@/app/[locale]/creators/components/Other/Other";
import Footer from "@/components/Footer/Footer";
import PageWrapper from "@/app/commonComponents/PageWrapper/PageWrapper";

interface Props {
    params: {
        creator: string;
        locale: string;
    }
}

export default function Creator({params}: Props) {
    const t = useTranslations('Creators');
    const {locale, creator} = params;
    const creatorData = useCreator(creator);

    return (
        <PageWrapper>
            <div className={styles.root}>
                <Header locale={locale} type="creator" {...creatorData}/>
                {creatorData.projects && (
                    <Projects data={creatorData.projects}/>
                )}
                <Other showShortTitle={!creatorData.projects?.length} data={creatorData.other}/>
                <Footer/>
            </div>
        </PageWrapper>
    )
}
