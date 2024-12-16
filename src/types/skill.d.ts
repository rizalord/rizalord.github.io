interface Skill {
    name: string
    icon: string
    priority: number
}

interface SkillData {
    name: string
    skills: Skill[]
}

export type { Skill, SkillData }