import AboutCard from '@/components/Cards/AboutCard'
import IntroCard from '@/components/Cards/IntroCard'
import { getMetadata } from '@/utils/metadata'

export async function generateMetadata() {
    const metadata = getMetadata()
    metadata.title = "About"
    return metadata
}

export default function About() {
    return (
        <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            {/* Intro */}
            <div>
                <IntroCard />
            </div>

            <AboutCard />
        </main>
    )
}
