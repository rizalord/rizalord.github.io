import { Avatar, Flex, Heading, Text, WrapItem } from "@chakra-ui/react"
import Navbar from "../components/nav/Navbar"

export default function Home() {
  return (
    <Flex height="100vh" maxH="100vh" padding={0} direction="column">
      <Navbar />

      <Flex
        flex="1"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <WrapItem width={{ base: "160px", md: "210px" }} mb={10}>
          <Avatar
            size="full"
            name="Segun Adebayo"
            src="/images/me.jpg"
            boxShadow="xl"
          />{" "}
        </WrapItem>

        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "6xl" }}
          textAlign="center"
          mb={2}
        >
          Ahmad Khamdani
        </Heading>
        <Text as="h2" fontSize={{ base: "2xl", md: "4xl" }} textAlign="center">
          Fullstack Developer
        </Text>
      </Flex>
    </Flex>
  )
}
