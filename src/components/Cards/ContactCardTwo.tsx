import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function ContactCardTwo() {
    return (
        <div className="mt-10 lg:mt-14">
            <Marquee
                className="group flex gap-6 overflow-hidden rounded-lg bg-light p-6 dark:bg-dark-2"
            >
                <div
                    className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]"
                >
                    {
                        Array.from({ length: 2 }).map((_, index) => (
                            <Link
                                key={index}
                                href="/contact"
                                className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
                            >
                                Let&apos;s 👋 Work Together
                            </Link>
                        ))
                    }
                </div>
                <div
                    className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]"
                >
                    {
                        Array.from({ length: 2 }).map((_, index) => (
                            <Link
                                key={index}
                                href="/contact"
                                className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
                            >
                                Let&apos;s 👋 Work Together
                            </Link>
                        ))
                    }
                </div>
            </Marquee>
        </div>
    )
}
