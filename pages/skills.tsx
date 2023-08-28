import { Container, Divider, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import SkillCard from "../components/cards/SkillCard"
import Navbar from "../components/nav/Navbar"
import client from "../config/client"
import { Skill } from "../models/Skill"

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: "skill" })

  items.reverse()

  return {
    props: { 
      skills: items 
    },
    revalidate: 60 * 60, // 1 hours
  }
}

export default function Skills({ skills }: { skills: Array<Skill> }) {
  const title = "Skills"
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/skills`

  const items = skills.map((skill, index) => (
    <SkillCard key={index} data={skill} />
  ))

  return (
    <Flex padding={0} direction="column">
      <NextSeo title={title} canonical={title} openGraph={{ url, title }} />

      <Navbar />
      <Container width={"full"} height={"full"} maxW="container.lg">
        <Flex
          flex="1"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading mt={{ base: 8 }} mb={{ base: 5 }}>
            Skills
          </Heading>
          <Divider />

          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            gap={{ base: 2, md: 6 }}
            pt={5}
            pb={10}
          >
            {items}
          </SimpleGrid>
        </Flex>
      </Container>
    </Flex>
  )
}
