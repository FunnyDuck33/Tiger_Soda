import Header from './components/Header/Header';

import styles from './page.module.css'

interface Props {
    params: {
        locale: string;
    }
}

export default function Home({params}: Props) {
  return (
      <div>
        <Header locale={params.locale}/>
      </div>
  )
}
