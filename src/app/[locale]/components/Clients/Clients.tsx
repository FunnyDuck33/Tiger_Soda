import cn from "classnames";

import BlockHeader from "@/app/[locale]/components/BlockHeader/BlockHeader";

import client1 from "@/app/[locale]/components/Clients/assets/client-1.svg";
import client2 from "@/app/[locale]/components/Clients/assets/client-2.svg";
import client3 from "@/app/[locale]/components/Clients/assets/client-3.svg";
import client4 from "@/app/[locale]/components/Clients/assets/client-4.svg";
import client5 from "@/app/[locale]/components/Clients/assets/client-5.svg";
import client6 from "@/app/[locale]/components/Clients/assets/client-6.svg";
import client7 from "@/app/[locale]/components/Clients/assets/client-7.svg";
import client8 from "@/app/[locale]/components/Clients/assets/client-8.svg";
import client9 from "@/app/[locale]/components/Clients/assets/client-9.svg";
import client10 from "@/app/[locale]/components/Clients/assets/client-10.svg";
import client11 from "@/app/[locale]/components/Clients/assets/client-11.svg";
import client12 from "@/app/[locale]/components/Clients/assets/client-12.svg";
import client13 from "@/app/[locale]/components/Clients/assets/client-13.svg";

import {useTranslations} from "next-intl";

import styles from './Clients.module.css';


const list1 = [
    {svg: client1},
    {svg: client2},
    {svg: client3},
    {svg: client4},
    {svg: client5},
    {svg: client6},
]

const list2 = [
    {svg: client7, type: 'tall'},
    {svg: client8},
    {svg: client9, type: 'tall'},
    {svg: client10},
    {svg: client11, type: 'tall'},
    {svg: client12},
    {svg: client13},
]

const Clients = () => {
    const t = useTranslations('Index');

    return (
        <div className={cn(styles.root, 'box')}>
            <BlockHeader title={t('Clients')}/>
            <div className={styles.wrapper}>
                {list1.map(({svg, type}) => (
                    <img src={svg.src} alt="" className={cn(styles.icon, type === 'tall' && styles.icon_tall)}/>
                ))}
            </div>
            <div className={styles.wrapper}>
                {list2.map(({svg, type}) => (
                    <img src={svg.src} alt="" className={cn(styles.icon, type === 'tall' && styles.icon_tall)}/>
                ))}
            </div>
        </div>
    )
}

export default Clients;
