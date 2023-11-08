import {useProjects} from "@/projectsData";
import {useTranslations} from "next-intl";

const data = [
    {
        examples: ['online-museum', 'nft'],
        key: "special-projects",
    },
    {
        examples: ['online-museum', 'nft'],
        key: "micromedia",
    },
    {
        examples: ['online-museum', 'nft'],
        key: "pr-support",
    },
    {
        examples: ['online-museum', 'nft'],
        key: "creative-consulting",
    },
    {
        examples: ['online-museum', 'nft'],
        key: "ethical-audit",
    },
    {
        examples: ['online-museum', 'nft'],
        key: "brand-media",
    },
    {
        examples: ['online-museum', 'nft'],
        key: "animated-podcasts",
    },
    {
        examples: ['online-museum', 'nft'],
        key: "educational-course",
    },
    {
        examples: ['online-museum', 'nft'],
        key: "new-formats",
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
