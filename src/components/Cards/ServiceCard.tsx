import React from 'react'
import { promises as fs } from 'fs'
import { ServiceData } from '@/types/service'
import Image from 'next/image'

export default async function ServiceCard() {
    const file = await fs.readFile(process.cwd() + '/src/data/service.json', 'utf8')
    const data: ServiceData = JSON.parse(file)

    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-2xl font-semibold dark:text-light">
                    {data.name}
                </h3>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
                {
                    data.services.map((service, index) => (
                        <div key={index} className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                            <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                                <Image src={service.icon} alt={service.name} width={46} height={46} />
                            </div>
                            <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                                {service.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
