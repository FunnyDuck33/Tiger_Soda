import Header from './components/Header/Header';
import Cover from "@/app/[locale]/components/Cover/Cover";

import styles from './page.module.css'
import Ticker from "@/app/[locale]/components/Ticker/Ticker";
import Projects from "@/app/[locale]/components/Projects/Projects";
import Services from "@/app/[locale]/components/Services/Services";
import Creators from "@/app/[locale]/components/Creators/Creators";
import Clients from "@/app/[locale]/components/Clients/Clients";
import Footer from "@/app/[locale]/components/Footer/Footer";

interface Props {
    params: {
        locale: string;
    }
}

export default function Home({params}: Props) {
  return (
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
  )
}
