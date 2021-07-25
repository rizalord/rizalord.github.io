import { Container, Divider, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import SkillCard from "../components/cards/SkillCard"
import Navbar from "../components/nav/Navbar"
import client from "../config/client"
import { Skill } from "../models/Skill"

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: "skill" })

  items.reverse()

  return {
    props: { skills: items },
  }
}

export default function Skills({ skills }: { skills: Array<Skill> }) {
  console.log(skills)

  const items = skills.map((skill, index) => (
    <SkillCard key={index} data={skill} />
  ))

  return (
    <Flex padding={0} direction="column">
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

          <Container width={"full"} height={"full"} maxW="container.lg" mt={5} mb={10}>
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 2, md: 6 }}>
              {items}
            </SimpleGrid>
          </Container>
        </Flex>
      </Container>
    </Flex>
  )
}
