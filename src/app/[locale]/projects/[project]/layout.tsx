import {ReactNode} from 'react';

type Props = {
    children: ReactNode;
};

export async function generateStaticParams() {
    return ['online-museum', 'nft', 'magic-mail'].map((project) => ({ project }))
}

export default function ProjectLayout({children}: Props) {
    return children;
}
