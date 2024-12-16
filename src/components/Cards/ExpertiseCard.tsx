import React from 'react'
import { promises as fs } from 'fs'
import { SkillData } from '@/types/skill'
import Image from 'next/image'

export default async function ExpertiseCard() {
    const file = await fs.readFile(process.cwd() + '/src/data/skill.json', 'utf8')
    const data: SkillData = JSON.parse(file)
    const skills = data.skills.sort((a, b) => b.priority - a.priority).slice(0, 6)

    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <h3 className="text-2xl font-semibold dark:text-light">
                My Expert Area
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                {
                    skills.map((skill, index) => (
                        <div key={index} className="text-center">
                            <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <Image src={skill.icon} alt={skill.name} width={28} height={28} />
                            </div>
                            <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                                {skill.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
