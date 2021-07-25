import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react"
import { NextSeo } from 'next-seo'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa"
import ProjectCard from "../components/cards/ProjectCard"
import Navbar from "../components/nav/Navbar"
import client from "../config/client"
import { Project } from "../models/Project"

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: "project" })

  items.reverse()

  return {
    props: { projects: items },
  }
}

export default function Projects({ projects }: { projects: Array<Project> }) {
  const title = "Projects"
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/projects`

  const items = projects.map((e, i) => <ProjectCard key={i} data={e} />)

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
            Projects
          </Heading>
          <Divider />

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={{ base: 4, md: 4, lg: 6 }}
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
