import ContactCard from '@/components/Cards/ContactCard'
import ExpertiseCard from '@/components/Cards/ExpertiseCard'
import IntroCard from '@/components/Cards/IntroCard'
import RecentProjectCard from '@/components/Cards/RecentProjectCard'
import ServiceCard from '@/components/Cards/ServiceCard'
import WorkExperienceCard from '@/components/Cards/WorkExperienceCard'
import { getMetadata } from '@/utils/metadata'

export async function generateMetadata() {
  const metadata = getMetadata()
  return metadata
}

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* Intro */}
      <IntroCard />

      <div className="grid grid-cols-1 gap-4 lg:gap-6">
        {/* Work Experience */}
        <WorkExperienceCard />

        {/* Expertise */}
        <ExpertiseCard />
      </div>

      {/* Projects */}
      <RecentProjectCard />

      {/* Services */}
      <ServiceCard />

      {/* Contact */}
      <ContactCard />
    </main>
  )
}
