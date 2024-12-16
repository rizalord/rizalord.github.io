interface EducationDetail {
    institution: string
    logo: string
    degree: string
    startDate: string
    endDate: string
    link: string
}

interface Education {
    name: string
    educations: EducationDetail[]
}

export type { EducationDetail, Education }