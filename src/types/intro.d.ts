interface SocialLinks {
    linkedin: string
    facebook: string
    instagram: string
    github: string
}

interface Intro {
    name: string
    description: string
    image: string
    telegram: string
    email: string
    social: SocialLinks
}

export type { SocialLinks, Intro }