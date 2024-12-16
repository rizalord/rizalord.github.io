import React from 'react'
import { promises as fs } from 'fs'
import { Nav } from '@/types/nav'
import Link from 'next/link'

export default async function Footer() {
    const file = await fs.readFile(process.cwd() + '/src/data/nav.json', 'utf8')
    const data: Nav = JSON.parse(file)

    return (
        <footer className="text-center">
            <p className="text-sm dark:text-light/70">
                {data.footer_text}
                <Link href={data.footer_link}
                    target="_blank"
                    className="inline-block border-b border-b-transparent text-primary transition hover:border-b-primary hover:text-blue-600">
                    {data.footer_designer}
                </Link>
            </p>
        </footer>
    )
}
