'use client';

import {projects} from "@/data";

import floaty1 from '@/../public/assets/floaties/floaty.png';
import floaty2 from '@/../public/assets/floaties/floaty-2.png';

import Navigation from "@/app/[locale]/components/Navigation/Navigation";
import Footer from "@/app/[locale]/components/Footer/Footer";

import styles from './page.module.scss'
import BlockHeader from "@/app/[locale]/components/BlockHeader/BlockHeader";
import cn from "classnames";
import ImageItem from "@/app/[locale]/components/ImageItem/ImageItem";
import {useTranslations} from "next-intl";
import {isMobile} from "@/helpers";

interface Props {
    params: {
        locale: string;
    }
}

export default function Projects({params}: Props) {
    const t = useTranslations('Projects');
    const i18nBanners = t.raw('banners');

  return (
      <div className={styles.root}>
          <Navigation withLogo={true} theme='white' locale={params.locale}/>
          <BlockHeader title="projects" className={cn('box', styles.blockHeader)} titleClassName={styles.title}/>
          <div className={cn('box', styles.itemsWrapper)}>
              {projects(i18nBanners).map(({link, src, title}) => (
                  <ImageItem src={src} title={title} link={link} size={isMobile() ? 'm': 'l'} />
              ))}
              {!isMobile() && (
                  <>
                      <img src={floaty1.src} alt="" className={cn(styles.floaty, styles.floaty1)}/>
                      <img src={floaty2.src} alt="" className={cn(styles.floaty, styles.floaty2)}/>
                  </>
              )}
          </div>
          <Footer/>
      </div>
  )
}
