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
import SkillCard from "../components/cards/SkillCard"
import Navbar from "../components/nav/Navbar"

export default function Skills() {
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

          <Container
            width={"full"}
            height={"full"}
            maxW="container.lg"
            mt={5}
          >
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 2, md: 6 }}>
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
            </SimpleGrid>
          </Container>
        </Flex>
      </Container>
    </Flex>
  )
}
