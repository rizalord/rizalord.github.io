import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
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
import Navbar from "../components/nav/Navbar"

export default function About() {
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
            About Me
          </Heading>
          <Divider />

          <WrapItem width={{ base: "160px", md: "170px" }} mb={10} mt={8}>
            <Avatar size="full" name="Segun Adebayo" src="/images/me.jpg" />{" "}
          </WrapItem>

          <Container
            width={"full"}
            height={"full"}
            maxW="container.lg"
            py={4}
            lineHeight="tall"
          >
            <Text py={2}>
              Hello, my name is <b>Ahmad Rizal Khamdani</b>. Usually called{" "}
              <b>Rizal</b>. I&apos;m currently 18 years old. Born and live in
              Malang, East Java, Indonesia. Graduated from{" "}
              <b>SMK Negeri 4 Malang</b> at 2021 as Software Engineering
              student.
            </Text>
            <Text py={2}>
              I Love make something that useful for the others like make an
              application website and i am prefer in Backend development using
              Laravel or NestJS, and until now, i am still learning, because
              everyday the technologies is continues to develop.
            </Text>
            <Text
              py={2}
              mt={4}
              mb={2}
              // textAlign="center"
            >
              You can reach me out via email at{" "}
              <b>ahmadkhamdani9@gmail.com</b>, or via socials below:
            </Text>

            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
              // justifyContent="center"
            >
              <Button
                leftIcon={<FaFacebook />}
                colorScheme="facebook"
                variant="solid"
              >
                Facebook
              </Button>
              <Button
                leftIcon={<FaGithub />}
                colorScheme={useColorModeValue("blackAlpha", "white")}
                bgColor={useColorModeValue("blackAlpha.900", "whiteAlpha.900")}
                variant="solid"
              >
                Github
              </Button>
              <Button
                leftIcon={<FaInstagram />}
                colorScheme="pink"
                variant="solid"
              >
                Instagram
              </Button>
              <Button
                leftIcon={<FaLinkedin />}
                colorScheme="linkedin"
                variant="solid"
              >
                LinkedIn
              </Button>
              <Button
                leftIcon={<FaTelegram />}
                colorScheme="telegram"
                variant="solid"
              >
                Telegram
              </Button>
              <Button
                leftIcon={<FaTwitter />}
                colorScheme="twitter"
                variant="solid"
              >
                Twitter
              </Button>
            </Stack>
          </Container>
        </Flex>
      </Container>
    </Flex>
  )
}
