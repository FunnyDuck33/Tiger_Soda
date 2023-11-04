import creators1Preview from '@/../public/assets/creators/creator1-preview.png';
import creators2Preview from '@/../public/assets/creators/creator2-preview.png';
import creators3Preview from '@/../public/assets/creators/creator3-preview.png';
import creators4Preview from '@/../public/assets/creators/creator4-preview.png';

import {useTranslations} from "next-intl";
import {merge} from 'lodash';

interface i18nCreatorItem {
    title: string;
    desc: string;
}

interface CreatorItem {
    src: string;
    link: string;
}

type CombinedCreatorItem = i18nCreatorItem & CreatorItem;

interface CreatorList {
    [K: string]: CombinedCreatorItem;
}

const data = {
    'ivan-ivanov': {
        src: creators1Preview.src,
        link: '/creators/ivan-ivanov',
    },
    'petr-petrow': {
        src: creators2Preview.src,
        link: '/creators/petr-petrow',

    },
    'svetlana-svetlanova': {
        src: creators3Preview.src,
        link: '/creators/svetlana-svetlanova',
    },
    'elena-troyanskaya': {
        src: creators4Preview.src,
        link: '/creators/elena-troyanskaya',
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
