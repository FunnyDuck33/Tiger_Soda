import {ReactNode} from 'react';
import {creatorsRoutes} from "@/creatorsData";

type Props = {
    children: ReactNode;
};

export async function generateStaticParams() {
    return creatorsRoutes.map((creator) => ({ creator }))
}

export default function ProjectLayout({children}: Props) {
    return children;
}
