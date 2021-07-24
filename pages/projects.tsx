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

export default function Projects() {
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
            Projects
          </Heading>
          <Divider />

          <Container width={"full"} height={"full"} maxW="container.lg" mt={5}>
            <SimpleGrid columns={{ base: 2, md: 2 }} gap={{ base: 2, md: 6 }}>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </SimpleGrid>
          </Container>
        </Flex>
      </Container>
    </Flex>
  )
}
