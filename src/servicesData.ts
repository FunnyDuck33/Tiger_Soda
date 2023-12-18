import {useProjects} from "@/projectsData";
import {useTranslations} from "next-intl";

const data = [
    {
        examples: ['online-museum', 'nft'],
        key: "creative",
    },
    {
        examples: ['online-museum', 'nft'],
        key: "digital-production",
    },
    {
        examples: ['online-museum', 'nft'],
        key: "video-production-and-animation",
    },
    {
        examples: ['online-museum', 'nft'],
        key: "web3",
    },
]

export const useServices = () => {
    const projectsData = useProjects();
    const t = useTranslations('Services');
    const list = t.raw('list');

    return data.map(item => ({
        ...item,
        ...list[item.key],
        examples: item.examples.map(name => projectsData[name]),
    }))
}
