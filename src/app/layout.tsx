import Header from '@/components/Headers/Header'
import "./../styles/globals.css"
import "./../styles/swiper-bundle.min.css"
import "./../styles/venobox.min.css"
import { bricolageGrotesque } from './font'
import { getMetadata } from '@/utils/metadata'
import MobileMenu from '@/components/Headers/MobileMenu'
import Footer from '@/components/Footers/Footer'
import BackgroundSection from '@/components/Sections/BackgroundSection'
import { promises as fs } from 'fs'
import { Nav } from '@/types/nav'
import { ThemeProvider } from 'next-themes'
import SidebarProvider from '@/providers/sidebar'

export async function generateMetadata() {
  return getMetadata()
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const file = await fs.readFile(process.cwd() + '/src/data/nav.json', 'utf8')
  const data: Nav = JSON.parse(file)

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // className={`${bricolageGrotesque.className} antialiased relative h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light`}
        className={`${bricolageGrotesque.className}`}
      >
        <ThemeProvider attribute="class">
          <SidebarProvider>
            <div className="antialiased relative h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light">
              <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
                {/* Header */}
                <Header title={data.header.title} menu={data.header.menu} />
                {/* Header end */}

                {/* Mobile Menu */}
                <MobileMenu title={data.header.title} menu={data.header.menu} />
                {/* Mobile Menu end */}

                {/* Content */}
                {children}
                {/* Content end */}

                {/* Footer */}
                <Footer />
                {/* Footer end */}
              </div>

              <BackgroundSection />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
