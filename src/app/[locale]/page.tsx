'use client';

import Header from '@/app/components/Header/Header';
import Cover from "@/app/components/Cover/Cover";

import styles from './page.module.css'
import Ticker from "@/app/components/Ticker/Ticker";
import Projects from "@/app/components/Projects/Projects";
import Services from "@/app/components/Services/Services";
import Creators from "@/app/components/Creators/Creators";
import Clients from "@/app/components/Clients/Clients";
import Footer from "@/components/Footer/Footer";
import PageWrapper from "@/app/commonComponents/PageWrapper/PageWrapper";

interface Props {
    params: {
        locale: string;
    }
}

export const dynamic = 'force-static';

export default function Home({params}: Props) {
    return (
        <PageWrapper>
            <div className={styles.root}>
                <Header locale={params.locale}/>
                <Cover/>
                <Ticker/>
                <Projects/>
                <Services/>
                <Creators/>
                <Clients/>
                <Footer/>
            </div>
        </PageWrapper>
    )
}
