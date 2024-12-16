interface Project {
    name: string;
    description: string;
    category: string;
    technologies: string[];
    image: string;
    link: string | null;
}

interface Portfolio {
    title: string;
    title_bold: string;
    description: string;
    projects: Project[];
}

export type { Project, Portfolio };