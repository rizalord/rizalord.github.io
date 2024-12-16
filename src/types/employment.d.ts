interface Job {
    company_longname: string;
    company_shortname: string;
    logo: string;
    position_longname: string;
    position_shortname: string;
    startDate: string;
    endDate: string;
    link: string;
}

interface Employment {
    name: string;
    jobs: Job[];
}

export type { Job, Employment };