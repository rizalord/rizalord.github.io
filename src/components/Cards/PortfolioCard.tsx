"use client"

import React, { useState } from 'react'
import DefaultPagination from '../Pagination/DefaultPagination'
import ContactCardTwo from './ContactCardTwo'
import { Portfolio } from '@/types/portfolio'
import Image from 'next/image'
import Link from 'next/link'

interface PortfolioCardProps {
    portfolio: Portfolio
}

export default function PortfolioCard({ portfolio }: PortfolioCardProps) {
    const reversedProjects = portfolio.projects.toReversed()

    const [projects, setProjects] = useState(reversedProjects.slice(0, 3))
    const perPage = 3
    const totalPage = Math.ceil(portfolio.projects.length / perPage)

    const handlePagination = (page: number) => {
        setProjects(reversedProjects.slice((page - 1) * perPage, page * perPage))
    }

    return (
        <div
            className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10"
        >
            <div className="">
                <h2
                    className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight"
                >
                    {portfolio.title} <span className="text-primary">{portfolio.title_bold}</span>
                </h2>
                <p className="mt-4 text-lg text-muted dark:text-light/70">
                    {portfolio.description}
                </p>
            </div>

            {/* Portfolio */}
            <div className="mt-10 lg:mt-14">
                <div className="mt-6 space-y-6">
                    {/* Items */}
                    {
                        projects.map((project) => (
                            <div key={reversedProjects.findIndex((p) => p.name === project.name)}>
                                <div
                                    className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0 xl:p-10 xl:pb-0"
                                >
                                    <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            className="h-full w-full rounded-t-lg object-fill object-top transition"
                                            width={1600}
                                            height={1600}
                                        />

                                        <Link
                                            href={project.image}
                                            data-gall="project-gallry-1"
                                            className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                className="h-6 w-6"
                                            >
                                                <path d="M10 4.167v11.666M4.167 10h11.666" />
                                            </svg>
                                        </Link>
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                                        <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className="flex flex-wrap items-start justify-between py-4 md:p-6"
                                >
                                    <div className="">
                                        <h3 className="text-lg font-medium md:text-xl lg:text-2xl">
                                            {
                                                project.link
                                                    ? (
                                                        <Link
                                                            target="_blank"
                                                            href={project.link}
                                                            className="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary"
                                                        >
                                                            {project.name}
                                                        </Link>
                                                    )
                                                    : (
                                                        <span className="text-dark dark:text-light/80">
                                                            {project.name}
                                                        </span>
                                                    )
                                            }
                                        </h3>
                                        <p className="text-sm text-muted lg:text-base">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {
                                                project.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 text-xs font-medium text-white bg-primary rounded dark:bg-primary"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                        {/* End Technologies */}
                                    </div>

                                    {
                                        project.link && (
                                            <Link
                                                target="_blank"
                                                href={project.link}
                                                className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-black dark:text-light/70 dark:hover:text-primary"
                                            >
                                                <span>Visit Site</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 14 15"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-4 w-4 shrink-0"
                                                >
                                                    <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                                </svg>
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                    {/* End Items */}
                </div>

                {/* Pagination */}
                <DefaultPagination totalPage={totalPage} initialPage={1} handlePagination={handlePagination} />
                {/* End Pagination */}
            </div>

            {/* Contact */}
            <ContactCardTwo />
        </div>
    )
}
