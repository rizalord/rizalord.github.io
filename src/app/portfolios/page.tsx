import IntroCard from '@/components/Cards/IntroCard'
import PortfolioCard from '@/components/Cards/PortfolioCard'
import type { Portfolio } from '@/types/portfolio'
import { getMetadata } from '@/utils/metadata'
import { promises as fs } from 'fs'

export async function generateMetadata() {
    const metadata = getMetadata()
    metadata.title = "Works"
    return metadata
}

export default async function Portfolio() {
    const file = await fs.readFile(process.cwd() + '/src/data/portfolio.json', 'utf8')
    const data: Portfolio = JSON.parse(file)

    return (
        <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            {/* Intro */}
            <div>
                <IntroCard />
            </div>

            <PortfolioCard portfolio={data} />
        </main>
    )
}
