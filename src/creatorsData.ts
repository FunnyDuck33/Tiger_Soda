import creators1Preview from '../public/assets/creators/creator1/preview.png';
import creators2Preview from '../public/assets/creators/creator2/preview.png';
import creators3Preview from '../public/assets/creators/creator3/preview.png';

import creator1TitleImage from '../public/assets/creators/creator1/title.png';
import creator2TitleImage from '../public/assets/creators/creator2/title.png';
import creator3TitleImage from '../public/assets/creators/creator3/title.png';
import creator1TitleImageFloaty from '../public/assets/creators/creator1/titleFloaty.png';
import creator2TitleImageFloaty from '../public/assets/creators/creator2/titleFloaty.png';
import creator3TitleImageFloaty from '../public/assets/creators/creator3/titleFloaty.png';

import creator1Project1 from '../public/assets/creators/creator1/project1.png';
import creator1Project2 from '../public/assets/creators/creator1/project2.png';
import creator1Project3 from '../public/assets/creators/creator1/project3.png';
import creator2Project1 from '../public/assets/creators/creator2/project1.png';
import creator2Project2 from '../public/assets/creators/creator2/project2.png';
import creator2Project3 from '../public/assets/creators/creator2/project3.png';
import creator3Project1 from '../public/assets/creators/creator3/project1.png';
import creator3Project2 from '../public/assets/creators/creator3/project2.png';
import creator3Project3 from '../public/assets/creators/creator3/project3.png';

import creator1Other1 from '../public/assets/creators/creator1/other1.png';
import creator1Other2 from '../public/assets/creators/creator1/other2.png';
import creator1Other3 from '../public/assets/creators/creator1/other3.png';
import creator1Other4 from '../public/assets/creators/creator1/other4.png';
import creator1Other5 from '../public/assets/creators/creator1/other5.png';
import creator2Other1 from '../public/assets/creators/creator2/other1.png';
import creator2Other2 from '../public/assets/creators/creator2/other2.png';
import creator2Other3 from '../public/assets/creators/creator2/other3.png';
import creator2Other4 from '../public/assets/creators/creator2/other4.png';
import creator2Other5 from '../public/assets/creators/creator2/other5.png';
import creator3Other1 from '../public/assets/creators/creator3/other1.png';
import creator3Other2 from '../public/assets/creators/creator3/other2.png';
import creator3Other3 from '../public/assets/creators/creator3/other3.png';
import creator3Other4 from '../public/assets/creators/creator3/other4.png';
import creator3Other5 from '../public/assets/creators/creator3/other5.png';

import {useTranslations} from "next-intl";
import {merge} from 'lodash';
import {TitleImage} from "@/types";
import {useProject} from "@/projectsData";

interface i18nCreatorItem {
    title: string;
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
            floatySrc: creator1TitleImageFloaty.src,
        },
        projects: [
            {
                src: creator1Project1.src,
                id: 'online-museum',
            },
            {
                src: creator1Project2.src,
                id: 'chat-bot',
            },
            {
                src: creator1Project3.src,
                id: 'chat-bot',
            }
        ],
        other: [
            creator1Other1.src,
            creator1Other2.src,
            creator1Other3.src,
            creator1Other4.src,
            creator1Other5.src,
        ],
    },
    'aidar-bekchintaev': {
        src: creators2Preview.src,
        link: '/creators/aidar-bekchintaev',
        titleImage: {
            src: creator2TitleImage.src,
            floatySrc: creator2TitleImageFloaty.src,
        },
        projects: [
            {
                src: creator2Project1.src,
                id: 'online-museum',
            },
            {
                src: creator2Project2.src,
                id: 'online-museum',
            },
            {
                src: creator2Project3.src,
                id: 'online-museum',
            }
        ],
        other: [
            creator2Other1.src,
            creator2Other2.src,
            creator2Other3.src,
            creator2Other4.src,
            creator2Other5.src,
        ],
    },
    'artem-bizyaev': {
        src: creators3Preview.src,
        link: '/creators/artem-bizyaev',
        titleImage: {
            src: creator3TitleImage.src,
            floatySrc: creator3TitleImageFloaty.src,
        },
        projects: [
            {
                src: creator3Project1.src,
                id: 'online-museum',
            },
            {
                src: creator3Project2.src,
                id: 'online-museum',
            },
            {
                src: creator3Project3.src,
                id: 'online-museum',
            }
        ],
        other: [
            creator3Other1.src,
            creator3Other2.src,
            creator3Other3.src,
            creator3Other4.src,
            creator3Other5.src,
        ],
    },
} as Record<string, CreatorItem>;

export const creatorsRoutes = Object.keys(data);

export const useCreators = (): CreatorList => {
    return Object.keys(data).reduce((acc, key) => {
        acc[key] = useCreator(key);

        return acc;
    }, {} as CreatorList);
}

export const useCreator = (creator: string): CombinedCreatorItem => {
    const t = useTranslations(`Creators`);
    const i18nData = t.raw('list');

    const item = populateCreator(data[creator]);
    const i18nItem = i18nData[creator];

    return merge(item, i18nItem);
}

const populateCreator = (creator: CreatorItem) => {
    creator.projects.forEach(project => {
        const refProject = useProject(project.id);

        project.title = refProject.previewTitle;
        project.link = refProject.link;
    })

    return creator;
}
