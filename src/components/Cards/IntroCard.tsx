import Image from 'next/image'
import React from 'react'
import { promises as fs } from 'fs'
import { Intro } from '@/types/intro'
import Link from 'next/link'
import ClipEmailButton from '../Buttons/ClipEmailButton'

export default async function IntroCard() {
    const file = await fs.readFile(process.cwd() + '/src/data/intro.json', 'utf8')
    const data: Intro = JSON.parse(file)

    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <div className="aspect-6/4 overflow-hidden rounded-lg bg-light pt-4 text-center dark:bg-dark-2">
                <Image
                    src={data.image}
                    alt="Profile"
                    width={200}
                    height={200}
                    className="inline-block h-full w-full scale-110 object-contain object-bottom"
                />
            </div>

            <div className="mt-6">
                <h3 className="text-2xl font-semibold dark:text-light">
                    {data.name} 👋
                </h3>
                <p className="mt-2 text-muted dark:text-light/70">
                    {data.description}
                </p>

                {/* CTA buttons */}
                <div className="mt-6 flex flex-wrap gap-2">
                    <Link href={data.telegram} target="_blank"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-4 py-3 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50">
                        <svg width="20px" height="20px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 1.5L0.5 6.5L4.5 8.5L10.5 4.5L6.5 9.5L12.5 13.5L14.5 1.5Z" stroke="#ffffff" strokeLinejoin="round" />
                        </svg>
                        <span>Message Me</span>
                    </Link>

                    <ClipEmailButton email={data.email} />
                </div>

                {/* Social */}
                <div className="mt-8 flex flex-wrap items-center gap-2">
                    {/* Linkedin */}
                    <Link href={data.social.linkedin} target="_blank"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-10h3v1.5c.69-1.19 2.09-2 3.5-2 2.21 0 4 1.79 4 4v6.5z" />
                        </svg>
                    </Link>
                    {/* Linkedin end */}

                    {/* Facebook */}
                    <Link href={data.social.facebook} target="_blank"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                            <path
                                d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                        </svg>
                    </Link>
                    {/* Facebook end */}

                    {/* Instagram */}
                    <Link href={data.social.instagram} target="_blank"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                            <path
                                d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                        </svg>
                    </Link>
                    {/* Instagram end */}

                    {/* Github */}
                    <Link href={data.social.github} target="_blank"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                            <path
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </Link>
                    {/* Github end */}
                </div>
            </div>
        </div>
    )
}
