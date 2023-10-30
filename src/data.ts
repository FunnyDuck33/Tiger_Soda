import project1Preview from '@/../public/assets/projects/project1-preview.png';
import project2Preview from '@/../public/assets/projects/project2-preview.png';
import project3Preview from '@/../public/assets/projects/project3-preview.png';

import project1TitleImage from '@/../public/assets/projects/project1-titleImage.png';
import project2TitleImage from '@/../public/assets/projects/project2-titleImage.png';
import project3TitleImage from '@/../public/assets/projects/project3-titleImage.png';

interface i18nProjectItem {
    title: string;
    previewTitle: string;
    tags: string[];
}


interface ProjectItem {
    src: string;
    link: string;
    titleImage: {
        src: string;
        styles: {
            [K: string]: number;
        };
    };
}

interface i18nProjectList {
    [K: string]: i18nProjectItem;
}

type CombinedProjectItem = i18nProjectItem & ProjectItem;

interface CombinedProjectList {
    [K: string]: CombinedProjectItem;
}

export const projects = (i18n: i18nProjectList): CombinedProjectList => {
    const data = {
        'online-museum': {
            src: project1Preview.src,
            link: '/projects/online-museum',
            titleImage: {
                src: project1TitleImage.src,
                styles: {
                    top: 73,
                    height: 436,
                    deviationFromCenter: 293,
                }
            },
        },
        'nft': {
            src: project2Preview.src,
            link: '/projects/nft',
            titleImage: {
                src: project2TitleImage.src,
                styles: {
                    top: 62,
                    height: 494,
                    deviationFromCenter: 362,
                }
            },
        },
        'magic-mail': {
            src: project3Preview.src,
            link: '/projects/magic-mail',
            titleImage: {
                src: project3TitleImage.src,
                styles: {
                    top: 81,
                    height: 493,
                    deviationFromCenter: 107,
                }
            },
        },
    };

    return Object.entries(data).reduce((acc, [key, item]) => {
        acc[key] = {
            ...item,
            ...i18n[key],
        }

        return acc;
    }, {} as CombinedProjectList);
}
