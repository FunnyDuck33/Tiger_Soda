import creators1Preview from '@/../public/assets/creators/creator1-preview.png';
import creators2Preview from '@/../public/assets/creators/creator2-preview.png';
import creators3Preview from '@/../public/assets/creators/creator3-preview.png';
import creators4Preview from '@/../public/assets/creators/creator4-preview.png';

import creator1TitleImage from '@/../public/assets/creators/creator1-title.png';
import creator2TitleImage from '@/../public/assets/creators/creator2-title.png';
import creator3TitleImage from '@/../public/assets/creators/creator3-title.png';
import creator1TitleImageM from '@/../public/assets/creators/creator1-titleM.png';
import creator2TitleImageM from '@/../public/assets/creators/creator2-titleM.png';
import creator3TitleImageM from '@/../public/assets/creators/creator3-titleM.png';

import creator1Project1 from '@/../public/assets/creators/creator1-project1.png';
import creator1Project2 from '@/../public/assets/creators/creator1-project2.png';
import creator1Project3 from '@/../public/assets/creators/creator1-project3.png';
import creator2Project1 from '@/../public/assets/creators/creator2-project1.png';
import creator2Project2 from '@/../public/assets/creators/creator2-project2.png';
import creator2Project3 from '@/../public/assets/creators/creator2-project3.png';
import creator3Project1 from '@/../public/assets/creators/creator3-project1.png';
import creator3Project2 from '@/../public/assets/creators/creator3-project2.png';
import creator3Project3 from '@/../public/assets/creators/creator3-project3.png';

import creator1Other1 from '@/../public/assets/creators/creator1-other1.png';
import creator1Other2 from '@/../public/assets/creators/creator1-other2.png';
import creator1Other3 from '@/../public/assets/creators/creator1-other3.png';
import creator1Other4 from '@/../public/assets/creators/creator1-other4.png';
import creator1Other5 from '@/../public/assets/creators/creator1-other5.png';
import creator2Other1 from '@/../public/assets/creators/creator2-other1.png';
import creator2Other2 from '@/../public/assets/creators/creator2-other2.png';
import creator2Other3 from '@/../public/assets/creators/creator2-other3.png';
import creator2Other4 from '@/../public/assets/creators/creator2-other4.png';
import creator2Other5 from '@/../public/assets/creators/creator2-other5.png';

import {useTranslations} from "next-intl";
import {merge} from 'lodash';
import {TitleImage} from "@/types";

interface i18nCreatorItem {
    title: string;
    desc: string;
    titleText: string;
    tags: string[];
}

interface CreatorItem {
    src: string;
    link: string;
    titleImage: TitleImage;
    projects: any[];
    other: any[];
}

type CombinedCreatorItem = i18nCreatorItem & CreatorItem;

interface CreatorList {
    [K: string]: CombinedCreatorItem;
}

const data = {
    'vitaly-terletsky': {
        src: creators1Preview.src,
        link: '/creators/vitaly-terletsky',
        titleImage: {
            src: creator1TitleImage.src,
            srcM: creator1TitleImageM.src,
            styles: {
                bottom: -11,
                height: 436,
                deviationFromCenter: 257,
            },
            stylesM: {
                marginTop: -56,
                marginBottom: -17,
                left: -44,
                width: 361,
            }
        },
        projects: [
            {
                src: creator1Project1.src,
                title: 'Online museum of ZHEK-art',
                link: '/projects/online-museum',
            },
            {
                src: creator1Project2.src,
                title: 'Online museum of ZHEK-art',
                link: '/projects/online-museum',
                isCircle: true,
            },
            {
                src: creator1Project3.src,
                title: 'Online museum of ZHEK-art',
                link: '/projects/online-museum',
                isCircle: true,
            }
        ],
        other: [
            {
                src: creator1Other1.src,
                link: '/',
            },
            {
                src: creator1Other2.src,
                link: '/',
            },
            {
                src: creator1Other3.src,
                link: '/',
            },
            {
                src: creator1Other4.src,
                link: '/',
            },
            {
                src: creator1Other5.src,
                link: '/',
            },
        ],
    },
    'aidar-bekchintaev': {
        src: creators2Preview.src,
        link: '/creators/aidar-bekchintaev',
        titleImage: {
            src: creator2TitleImage.src,
            srcM: creator2TitleImageM.src,
            styles: {
                bottom: -43,
                height: 452,
                deviationFromCenter: 275,
            },
            stylesM: {
                marginTop: 46,
                marginBottom: -33,
                left: -37,
                width: 361,
            }
        },
        projects: [
            {
                src: creator2Project1.src,
                title: 'Online museum of ZHEK-art',
                link: '/projects/online-museum',
            },
            {
                src: creator2Project2.src,
                title: 'Online museum of ZHEK-art',
                link: '/projects/online-museum',
                isCircle: true,
            },
            {
                src: creator2Project3.src,
                title: 'Online museum of ZHEK-art',
                link: '/projects/online-museum',
                isCircle: true,
            }
        ],
        other: [
            {
                src: creator2Other1.src,
                link: '/',
            },
            {
                src: creator2Other2.src,
                link: '/',
            },
            {
                src: creator2Other3.src,
                link: '/',
            },
            {
                src: creator2Other4.src,
                link: '/',
            },
            {
                src: creator2Other5.src,
                link: '/',
            },
        ],
    },
    'artem-bizyaev': {
        src: creators3Preview.src,
        link: '/creators/artem-bizyaev',
        titleImage: {
            src: creator3TitleImage.src,
            srcM: creator3TitleImageM.src,
            styles: {
                bottom: -45,
                height: 454,
                deviationFromCenter: 275,
            },
            stylesM: {
                marginTop: 10,
                marginBottom: -19,
                left: -55,
                width: 361,
            }
        },
        projects: [
            {
                src: creator3Project1.src,
                title: 'Online museum of ZHEK-art',
                link: '/projects/online-museum',
            },
            {
                src: creator3Project2.src,
                title: 'Online museum of ZHEK-art',
                link: '/projects/online-museum',
                isCircle: true,
            },
            {
                src: creator3Project3.src,
                title: 'Online museum of ZHEK-art',
                link: '/projects/online-museum',
                isCircle: true,
            }
        ],
        other: [
            {
                src: creator2Other1.src,
                link: '/',
            },
            {
                src: creator2Other2.src,
                link: '/',
            },
            {
                src: creator2Other3.src,
                link: '/',
            },
            {
                src: creator2Other4.src,
                link: '/',
            },
            {
                src: creator2Other5.src,
                link: '/',
            },
        ],
    },
    'elena-troyanskaya': {
        src: creators4Preview.src,
        link: '/creators/elena-troyanskaya',
        titleImage: {
            src: creator2TitleImage.src,
            srcM: creator2TitleImageM.src,
            styles: {
                bottom: -43,
                height: 452,
                deviationFromCenter: 275,
            },
            stylesM: {
                marginTop: 46,
                marginBottom: -33,
                left: -37,
                width: 361,
            }
        },
        projects: [
            {
                src: creator2Project1.src,
                title: 'Online museum of ZHEK-art',
                link: '/projects/online-museum',
            },
            {
                src: creator2Project2.src,
                title: 'Online museum of ZHEK-art',
                link: '/projects/online-museum',
                isCircle: true,
            },
            {
                src: creator2Project3.src,
                title: 'Online museum of ZHEK-art',
                link: '/projects/online-museum',
                isCircle: true,
            }
        ],
        other: [
            {
                src: creator2Other1.src,
                link: '/',
            },
            {
                src: creator2Other2.src,
                link: '/',
            },
            {
                src: creator2Other3.src,
                link: '/',
            },
            {
                src: creator2Other4.src,
                link: '/',
            },
            {
                src: creator2Other5.src,
                link: '/',
            },
        ],
    },
};
export const creatorsRoutes = Object.keys(data);

export const useCreators = (): CreatorList => {
    const t = useTranslations(`Creators`);
    const i18nData = t.raw('list');

    return Object.entries(data).reduce((acc, [key, item]) => {
        acc[key] = merge(item, i18nData[key]);

        return acc;
    }, {} as CreatorList);
}

export const useCreator = (creator: string): CombinedCreatorItem => {
    return useCreators()[creator];
}
