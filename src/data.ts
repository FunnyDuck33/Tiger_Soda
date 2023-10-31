import project1Preview from '@/../public/assets/projects/project1-preview.png';
import project2Preview from '@/../public/assets/projects/project2-preview.png';
import project3Preview from '@/../public/assets/projects/project3-preview.png';

import project1TitleImage from '@/../public/assets/projects/project1-title.png';
import project2TitleImage from '@/../public/assets/projects/project2-title.png';
import project3TitleImage from '@/../public/assets/projects/project3-title.png';

import project1TaskImage from '@/../public/assets/projects/project1-task.jpg';
import project2TaskImage from '@/../public/assets/projects/project2-task.png';
import project3TaskImage from '@/../public/assets/projects/project3-task.jpg';

import project1Content1 from '@/../public/assets/projects/project1-content1.jpg';
import project1Content2 from '@/../public/assets/projects/project1-content2.png';
import project1Content3 from '@/../public/assets/projects/project1-content3.jpg';

import project2Content1 from '@/../public/assets/projects/project2-content1.png';
import project2Content2 from '@/../public/assets/projects/project2-content2.png';
import project2Content3 from '@/../public/assets/projects/project2-content3.png';
import project2Content4 from '@/../public/assets/projects/project2-content4.png';
import project2Content5 from '@/../public/assets/projects/project2-content5.png';
import project2Content6 from '@/../public/assets/projects/project2-content6.png';

import project3Content1 from '@/../public/assets/projects/project3-content1.jpg';
import project3Content2 from '@/../public/assets/projects/project3-content2.jpg';

import {useTranslations} from "next-intl";
import {merge} from 'lodash';
import {Property} from "csstype";

interface i18nProjectItem {
    title: string;
    previewTitle: string;
    tags: string[];
    cover: string;
    ideas: string[];
    content: i18nProjectItemContent[][];
}

interface i18nProjectItemContent {
    desc: Property.TextAlign;
}


interface ProjectItem {
    src: string;
    taskSrc: string;
    link: string;
    titleImage: {
        src: string;
        styles: {
            [K: string]: number;
        };
    };
    content: ProjectItemContent[][];
}

interface ProjectItemContent {
    src: string;
    descAlign: string;
    height: number;
}

interface i18nProjectList {
    [K: string]: i18nProjectItem;
}

type CombinedProjectItem = i18nProjectItem & ProjectItem;
export type CombinedProjectItemContent = i18nProjectItemContent & ProjectItemContent;

interface CombinedProjectList {
    [K: string]: CombinedProjectItem;
}

export const useProjects = (): CombinedProjectList => {
    const t = useTranslations(`Projects`);
    const i18nData = t.raw('list');

    const data = {
        'online-museum': {
            src: project1Preview.src,
            taskSrc: project1TaskImage.src,
            link: '/projects/online-museum',
            titleImage: {
                src: project1TitleImage.src,
                styles: {
                    top: 73,
                    height: 436,
                    deviationFromCenter: 293,
                }
            },
            content: [
                [
                    {
                        src: project1Content1.src,
                        descAlign: 'left',
                        height: 686,
                    },
                ],
                [
                    {
                        src: project1Content2.src,
                        descAlign: 'left',
                        height: 480,
                    },
                    {
                        src: project1Content3.src,
                        descAlign: 'right',
                        height: 480,
                    },
                ]
            ]
        },
        'nft': {
            src: project2Preview.src,
            taskSrc: project2TaskImage.src,
            link: '/projects/nft',
            titleImage: {
                src: project2TitleImage.src,
                styles: {
                    top: 62,
                    height: 494,
                    deviationFromCenter: 362,
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
            ]
        },
        'magic-mail': {
            src: project3Preview.src,
            taskSrc: project3TaskImage.src,
            link: '/projects/magic-mail',
            titleImage: {
                src: project3TitleImage.src,
                styles: {
                    top: 81,
                    height: 493,
                    deviationFromCenter: 107,
                }
            },
            content: [
                [
                    {
                        src: project3Content1.src,
                        descAlign: 'left',
                        height: 520,
                    },
                    {
                        src: project3Content2.src,
                        descAlign: 'right',
                        height: 520,
                    },
                ],
            ]
        },
    };

    return Object.entries(data).reduce((acc, [key, item]) => {
        acc[key] = merge(item, i18nData[key]);

        return acc;
    }, {} as CombinedProjectList);
}

export const useProject = (project: string): CombinedProjectItem => {
    return useProjects()[project];
}
