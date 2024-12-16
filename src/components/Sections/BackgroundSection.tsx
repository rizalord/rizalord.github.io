import Image from 'next/image'
import React from 'react'

export default function BackgroundSection() {
    return (
        <div className="shapes">
            <div className="fixed -left-1/2 -top-1/2 -z-10 animate-spin-very-slow xl:-left-[20%] xl:-top-1/3">
                <Image src="/assets/img/gradient-1.png" alt="gradient-1" width={900} height={900} className="w-full h-full" />
            </div>

            <div className="fixed -right-[50%] top-[10%] -z-10 animate-spin-very-slow xl:-right-[15%] xl:top-[10%">
                <Image src="/assets/img/gradient-2.png" alt="gradient-2" width={900} height={900} className="w-full h-full" />
            </div>

            <div className="move-with-cursor fixed left-[10%] top-[20%] -z-10">
                <Image src="/assets/img/object-3d-1.png" alt="object-3d-1" width={900} height={900} className="w-full h-full" />
            </div>

            <div className="move-with-cursor fixed bottom-[20%] right-[10%] -z-10">
                <Image src="/assets/img/object-3d-2.png" alt="object-3d-2" width={900} height={900} className="w-full h-full" />
            </div>
        </div>
    )
}
