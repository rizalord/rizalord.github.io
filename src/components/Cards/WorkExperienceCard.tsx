import React from 'react'
import { promises as fs } from 'fs'
import Image from 'next/image'
import { Employment } from '@/types/employment'
import moment from 'moment'

export default async function WorkExperienceCard() {
    const file = await fs.readFile(process.cwd() + '/src/data/employment.json', 'utf8')
    const data: Employment = JSON.parse(file)

    return (
        <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
            <h3 className="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light">
                Work Experience
            </h3>

            <div
                className="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
                <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                    {
                        data.jobs.map((job, index) => (
                            <div key={index} className="flex flex-col gap-1 md:flex-row md:gap-10">
                                <p className="mt-1 text-sm font-medium text-muted dark:text-light/70 w-24">
                                    {moment(job.startDate).format('YYYY')} - {moment(job.endDate).format('YYYY')}
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                                        <Image src={job.logo} alt={job.company_longname} className="h-5 w-5" width={20} height={20} />
                                    </div>
                                    <div className="hidden md:block">
                                        <h6 className="text-base font-semibold text-dark dark:text-light/70">
                                            {job.company_shortname}
                                        </h6>
                                        <p className="text-sm text-muted">{job.position_shortname}</p>
                                    </div>
                                    <div className="md:hidden">
                                        <h6 className="text-base font-semibold text-dark dark:text-light/70">
                                            {job.company_longname}
                                        </h6>
                                        <p className="text-sm text-muted">{job.position_longname}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                    {
                        data.jobs.map((job, index) => (
                            <div key={index} className="flex flex-col gap-1 md:flex-row md:gap-10">
                                <p className="mt-1 text-sm font-medium text-muted dark:text-light/70 w-24">
                                    {moment(job.startDate).format('YYYY')} - {moment(job.endDate).format('YYYY')}
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                                        <Image src={job.logo} alt={job.company_longname} className="h-5 w-5" width={20} height={20} />
                                    </div>
                                    <div className="hidden md:block">
                                        <h6 className="text-base font-semibold text-dark dark:text-light/70">
                                            {job.company_shortname}
                                        </h6>
                                        <p className="text-sm text-muted">{job.position_shortname}</p>
                                    </div>
                                    <div className="md:hidden">
                                        <h6 className="text-base font-semibold text-dark dark:text-light/70">
                                            {job.company_longname}
                                        </h6>
                                        <p className="text-sm text-muted">{job.position_longname}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
