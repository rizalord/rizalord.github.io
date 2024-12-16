import React from 'react'
import ContactCardTwo from './ContactCardTwo'
import { promises as fs } from 'fs'
import { About } from '@/types/about'
import { SkillData } from '@/types/skill'
import Image from 'next/image'
import { Employment } from '@/types/employment'
import moment from 'moment'
import { Education } from '@/types/education'
import Link from 'next/link'

export default async function AboutCard() {
    const file = await fs.readFile(process.cwd() + '/src/data/about.json', 'utf8')
    const data: About = JSON.parse(file)

    const skillFile = await fs.readFile(process.cwd() + '/src/data/skill.json', 'utf8')
    const skill: SkillData = JSON.parse(skillFile)

    const employmentFile = await fs.readFile(process.cwd() + '/src/data/employment.json', 'utf8')
    const employment: Employment = JSON.parse(employmentFile)

    const educationFile = await fs.readFile(process.cwd() + '/src/data/education.json', 'utf8')
    const education: Education = JSON.parse(educationFile)

    return (
        <div
            className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10"
        >
            {/* About */}
            <div
                className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10"
            >
                <div className="">
                    <h2
                        className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]"
                    >
                        {data.prefix} <span className="text-primary">{data.name}</span> 👋
                    </h2>
                    <p
                        className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl"
                    >
                        {
                            data.description.map((desc, index) => desc.type === 'normal' ? (
                                <span key={index}>{desc.text} {' '}</span>
                            ) : (
                                <span key={index} className="font-semibold text-dark dark:text-white">{desc.text} {' '}</span>
                            ))
                        }
                    </p>
                </div>

                {
                    data.available ? (
                        <div
                            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg"
                        >
                            <span className="relative flex h-2 w-2 shrink-0">
                                <span
                                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"
                                ></span>
                                <span
                                    className="relative inline-flex h-2 w-2 rounded-full bg-primary"
                                ></span>
                            </span>
                            <span>Available For Hire</span>
                        </div>
                    ) : (
                        <div
                            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-muted dark:bg-dark-2 lg:text-lg"
                        >
                            <span className="relative flex h-2 w-2 shrink-0">
                                <span
                                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-muted opacity-75 dark:bg-light"
                                ></span>
                                <span
                                    className="relative inline-flex h-2 w-2 rounded-full bg-muted"
                                ></span>
                            </span>
                            <span>Not Available For Hire</span>
                        </div>
                    )
                }
            </div>

            {/* Count */}
            <div
                className="mt-8 flex flex-wrap justify-between gap-6 lg:mt-12 lg:gap-10"
            >
                <div className="flex flex-wrap items-start gap-6 lg:gap-10">
                    {
                        data.counts.map((count, index) => (
                            <div key={index} className="">
                                <h2
                                    className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]"
                                >
                                    <span>{count.count}</span>
                                </h2>
                                <p className="mt-2 text-muted">{count.label}</p>
                            </div>
                        ))
                    }
                </div>

                <div
                    className="relative -mt-6 hidden h-[100px] w-[100px] p-4 lg:block xl:-mt-10"
                >
                    <Image
                        src="/assets/img/circle-text.svg"
                        alt="circle-text"
                        className="absolute inset-0 h-full w-full animate-spin-slow dark:hidden"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/assets/img/circle-text-light.svg"
                        alt="circle-text-light"
                        className="absolute inset-0 hidden h-full w-full animate-spin-slow dark:block"
                        width={100}
                        height={100}
                    />
                    <div
                        className="grid h-full w-full place-content-center rounded-full bg-primary text-light"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40 40"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-10 w-10"
                        >
                            <path d="M20 5v30m-5-5 5 5 5-5" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Techs */}
            <div className="mt-10 lg:mt-14">
                <h3
                    className="text-2xl font-medium text-dark dark:text-light lg:text-3xl"
                >
                    {skill.name}
                </h3>
                <div
                    className="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(60px,1fr))] gap-2 lg:grid-cols-[repeat(auto-fit,_minmax(80px,1fr))] lg:gap-4"
                >
                    {
                        skill.skills.map((skill, index) => (
                            <div
                                key={index}
                                className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4"
                            >
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="h-8 w-8 lg:h-10 lg:w-10"
                                    width={32}
                                    height={32}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Works */}
            <div className="mt-10 lg:mt-14">
                <h3
                    className="text-2xl font-medium text-dark dark:text-light lg:text-3xl"
                >
                    {employment.name}
                </h3>

                <div className="mt-8 space-y-4">
                    {/* Items */}
                    {
                        employment.jobs.reverse().map((job, index) => (
                            <Link
                                href={job.link}
                                target="_blank"
                                key={index}
                                className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-5 xl:gap-10"
                            >
                                <div
                                    className="flex flex-col gap-4 md:col-span-3 md:flex-row md:items-center md:gap-6"
                                >
                                    <div
                                        className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2"
                                    >
                                        <Image
                                            src={job.logo}
                                            alt={job.company_longname}
                                            className="h-6 w-6 shrink-0"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div className="">
                                        <h5
                                            className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight"
                                        >
                                            {job.company_longname}
                                        </h5>
                                        <p className="text-muted">
                                            {moment(job.startDate).format('MMMM YYYY')} - {moment(job.endDate).format('MMMM YYYY')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 text-right md:col-span-2">
                                    <h5
                                        className="font-medium leading-tight text-dark dark:text-light text-left"
                                    >
                                        {job.position_longname}
                                    </h5>
                                </div>
                            </Link>
                        ))
                    }
                    {/* Items end */}
                </div>
            </div>

            {/* Educations */}
            <div className="mt-10 lg:mt-14">
                <h3
                    className="text-2xl font-medium text-dark dark:text-light lg:text-3xl"
                >
                    Educations
                </h3>

                <div className="mt-8 space-y-4">
                    {/* Items */}
                    {
                        education.educations.reverse().map((education, index) => (
                            <Link
                                href={education.link}
                                target="_blank"
                                key={index}
                                className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-5 xl:gap-10"
                            >
                                <div
                                    className="flex flex-col gap-4 md:col-span-3 md:flex-row md:items-center md:gap-6"
                                >
                                    <div
                                        className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2"
                                    >
                                        <Image
                                            src={education.logo}
                                            alt={education.institution}
                                            className="h-6 w-6 shrink-0"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div className="">
                                        <h5
                                            className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight"
                                        >
                                            {education.institution}
                                        </h5>
                                        <p className="text-muted">
                                            {moment(education.startDate).format('MMMM YYYY')} - {moment(education.endDate).format('MMMM YYYY')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 text-right md:col-span-2">
                                    <h5
                                        className="font-medium leading-tight text-dark dark:text-light text-left"
                                    >
                                        {education.degree}
                                    </h5>
                                </div>
                            </Link>
                        ))
                    }
                    {/* Items end */}
                </div>
            </div>

            {/* Contact */}
            <ContactCardTwo />
        </div>
    )
}
