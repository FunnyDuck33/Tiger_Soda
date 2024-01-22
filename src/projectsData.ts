import project1Preview from '../public/assets/projects/project1/preview.png';
import project2Preview from '../public/assets/projects/project2/preview.png';
import project3Preview from '../public/assets/projects/project3/preview.png';

import project1TitleImage from '../public/assets/projects/project1/title.png';
import project2TitleImage from '../public/assets/projects/project2/title.png';
import project3TitleImage from '../public/assets/projects/project3/title.png';
import project1TitleImageM from '../public/assets/projects/project1/titleM.png';
import project2TitleImageM from '../public/assets/projects/project2/titleM.png';
import project3TitleImageM from '../public/assets/projects/project3/titleM.png';

import project1TaskImage from '../public/assets/projects/project1/task.jpg';
import project2TaskImage from '../public/assets/projects/project2/task.png';
import project3TaskImage from '../public/assets/projects/project3/task.jpg';

import project1Content1 from '../public/assets/projects/project1/content1.jpg';
import project1Content2 from '../public/assets/projects/project1/content2.png';
import project1Content3 from '../public/assets/projects/project1/content3.jpg';
import project1Content4 from '../public/assets/projects/project1/content4.png';
import project1Content1M from '../public/assets/projects/project1/content1M.jpg';
import project1Content2M from '../public/assets/projects/project1/content2M.png';
import project1Content3M from '../public/assets/projects/project1/content3M.jpg';

import project2Content1 from '../public/assets/projects/project2/content1.png';
import project2Content2 from '../public/assets/projects/project2/content2.png';
import project2Content3 from '../public/assets/projects/project2/content3.png';
import project2Content4 from '../public/assets/projects/project2/content4.png';
import project2Content5 from '../public/assets/projects/project2/content5.png';
import project2Content6 from '../public/assets/projects/project2/content6.png';

import project3Content1 from '../public/assets/projects/project3/content1.png';
import project3Content2 from '../public/assets/projects/project3/content2.jpg';
import project3Content3 from '../public/assets/projects/project3/content3.jpg';
import project3Content1M from '../public/assets/projects/project3/content1M.jpg';


import project1Creator1 from '../public/assets/creators/creator11/preview.png';
import project1Creator2 from '../public/assets/creators/creator10/preview.png';

import {useTranslations} from "next-intl";
import {merge} from 'lodash';
import {Property} from "csstype";
import {TitleImage} from "@/types";

interface i18nProjectItem {
    title: string;
    titleM?: string;
    previewTitle: string;
    tags: string[];
    cover: string;
    ideas: string[];
    content: i18nProjectItemContent[][];
    creators?: i18nProjectItemCreators[];
}

interface i18nProjectItemContent {
    desc: string;
}

interface i18nProjectItemCreators {
    name: string;
}


interface ProjectItem {
    src: string;
    taskSrc: string;
    link: string;
    titleImage: TitleImage;
    content: ProjectItemContent[][];
    creators?: ProjectItemCreators[];
}

interface ProjectItemContent {
    src: string;
    srcM: string;
    descAlign: Property.TextAlign;
    height: number;
}

interface ProjectItemCreators {
    src: string;
    link: string;
}

export type CombinedProjectItem = i18nProjectItem & ProjectItem;

export type CombinedProjectItemContent = i18nProjectItemContent & ProjectItemContent;
export type CombinedProjectItemCreators = i18nProjectItemCreators & ProjectItemCreators;

interface CombinedProjectList {
    [K: string]: CombinedProjectItem;
}

const data = {
    'online-museum': {
        src: project1Preview.src,
        taskSrc: project1TaskImage.src,
        link: '/projects/online-museum',
        titleImage: {
            src: project1TitleImage.src,
            srcM: project1TitleImageM.src,
            styles: {
                top: 73,
                height: 436,
                right: 0,
            },
            stylesM: {
                marginTop: -26,
                marginBottom: -31,
                left: -7,
                width: 295,
            }
        },
        content: [
            [
                {
                    src: project1Content4.src,
                    descAlign: 'right',
                    height: 346,
                },
            ],
            [
                {
                    src: project1Content1.src,
                    srcM: project1Content1M.src,
                    descAlign: 'left',
                    height: 686,
                },
            ],
            [
                {
                    src: project1Content2.src,
                    srcM: project1Content2M.src,
                    descAlign: 'left',
                    height: 480,
                },
                {
                    src: project1Content3.src,
                    srcM: project1Content3M.src,
                    descAlign: 'right',
                    height: 480,
                },
            ]
        ],
        creators: [
            {
                src: project1Creator1.src,
                link: '/',
            },
            {
                src: project1Creator2.src,
                link: '/',
            }
        ]
    },
    'nft': {
        src: project2Preview.src,
        taskSrc: project2TaskImage.src,
        link: '/projects/nft',
        titleImage: {
            src: project2TitleImage.src,
            srcM: project2TitleImageM.src,
            styles: {
                top: 62,
                height: 494,
                right: -40,
            },
            stylesM: {
                marginTop: 6,
                marginBottom: -56,
                left: -5,
                width: 327,
            }
        },
        content: [
            [
                {
                    src: project2Content1.src,
                    descAlign: 'left',
                    height: 444,
                },
                {
                    src: project2Content2.src,
                    descAlign: 'right',
                    height: 444,
                },
            ],
            [
                {
                    src: project2Content3.src,
                    descAlign: 'left',
                    height: 444,
                },
                {
                    src: project2Content4.src,
                    descAlign: 'right',
                    height: 444,
                },
            ],
            [
                {
                    src: project2Content5.src,
                    descAlign: 'left',
                    height: 444,
                },
                {
                    src: project2Content6.src,
                    descAlign: 'right',
                    height: 444,
                },
            ],
        ],
        creators: [
            {
                src: project1Creator1.src,
                link: '/',
            },
            {
                src: project1Creator2.src,
                link: '/',
            },
            {
                src: project1Creator2.src,
                link: '/',
            }
        ]
    },
    'magic-mail': {
        src: project3Preview.src,
        taskSrc: project3TaskImage.src,
        link: '/projects/magic-mail',
        titleImage: {
            src: project3TitleImage.src,
            srcM: project3TitleImageM.src,
            styles: {
                top: 81,
                height: 493,
                right: 0,
            },
            stylesM: {
                marginTop: 12,
                marginBottom: -33,
                left: -16,
                width: 320,
            }
        },
        content: [
            [
                {
                    src: project3Content1.src,
                    srcM: project3Content1M.src,
                    descAlign: 'right',
                    height: 557,
                },
            ],
            [
                {
                    src: project3Content2.src,
                    descAlign: 'left',
                    height: 520,
                },
                {
                    src: project3Content3.src,
                    descAlign: 'right',
                    height: 520,
                },
            ],
        ],
    },
    'chat-bot': {
        link: '/',
    },
    'five-minute-adventure': {
        link: '/',
    },
    'efa-world-cup': {
        link: '/',
    }
} as unknown as Record<string, ProjectItem>;

export const projectRoutes = Object.keys(data);

export const useProjects = (): CombinedProjectList => {
    return Object.entries(data).filter(([_, val]) => val.content).reduce((acc, [key]) => {
        acc[key] = useProject(key);

        return acc;
    }, {} as CombinedProjectList);
}

export const useProject = (project: string): CombinedProjectItem => {
    const t = useTranslations(`Projects`);
    const i18nData = t.raw('list');

    const item = data[project];
    const i18nItem = i18nData[project];

    return merge(item, i18nItem);
}
