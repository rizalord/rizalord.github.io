import { Metadata } from 'next'

export const getMetadata = (): Metadata => {
    const siteUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const title = process.env.NEXT_PUBLIC_SITE_TITLE || 'Ahmad Rizal Khamdani'
    const description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Fullstack Developer'

    return {
        title: {
            default: title,
            template: '%s - Ahmad Rizal Khamdani'
        },
        description,
        authors: [{ name: 'Ahmad Rizal Khamdani', url: siteUrl }],
        metadataBase: new URL(siteUrl),
        openGraph: {
            type: 'website',
            url: siteUrl,
            title,
            images: [
                {
                    url: '/images/logo/bayu_tirta_black.svg',
                    alt: title,
                    width: 590,
                    height: 620
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            site: '@bayutirta',
            title,
            creator: '@bayutirta',
            images: [
                {
                    url: '/images/logo/bayu_tirta_black.svg',
                    alt: title,
                    width: 590,
                    height: 620
                }
            ]
        },

    }
}

