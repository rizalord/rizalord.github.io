import IntroCard from '@/components/Cards/IntroCard'
import ContactForm from '@/components/Forms/ContactForm'
import { Intro } from '@/types/intro'
import { getMetadata } from '@/utils/metadata'
import { promises as fs } from 'fs'

export async function generateMetadata() {
    const metadata = getMetadata()
    metadata.title = "Contact"
    return metadata
}

export default async function Contact() {
    const accessKey = process.env.WEBFORM_ACCESS_KEY

    const file = await fs.readFile(process.cwd() + '/src/data/intro.json', 'utf8')
    const data: Intro = JSON.parse(file)

    return (
        <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            {/* Intro */}
            <div>
                <IntroCard />
            </div>

            {
                accessKey && <ContactForm accessKey={accessKey} email={data.email} telegram={data.telegram} />
            }

        </main>
    )
}
