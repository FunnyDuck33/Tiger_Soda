import project1 from '@/../public/assets/projects/project-1.png';
import project2 from '@/../public/assets/projects/project-2.png';
import project3 from '@/../public/assets/projects/project-3.png';


export const projects = (i18n: string[]) => {
    const data = [
        {
            src: project1.src,
            link: '/',
        },
        {
            src: project2.src,
            link: '/',
        },
        {
            src: project3.src,
            link: '/',
        },
    ];

    const result = data.map((project, index) => ({
        ...project,
        title: i18n[index],
    }));

    return [...result, ...result];
}
