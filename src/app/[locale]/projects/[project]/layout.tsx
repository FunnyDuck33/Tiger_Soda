import {ReactNode} from 'react';
import {projectRoutes} from "@/projectsData";

type Props = {
    children: ReactNode;
};

export async function generateStaticParams() {
    return projectRoutes.map((project) => ({ project }))
}

export default function ProjectLayout({children}: Props) {
    return children;
}
