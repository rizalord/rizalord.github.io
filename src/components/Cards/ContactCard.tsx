import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function ContactCard() {
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <Marquee direction="left"
                className="overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-muted dark:bg-dark-2">
                Creating Innovative Solutions 🚀 Transforming Ideas into Reality 🎨 Creating Innovative Solutions 🚀 Transforming Ideas into Reality 🎨
            </Marquee>

            <h2 className="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light">
                Let&apos;s👋 <br />
                Work Together
            </h2>

            <Link href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
                <span>Let&apos;s Talk</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M17.5 11.667v-5h-5" />
                    <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
                </svg>
            </Link>
        </div>
    )
}
