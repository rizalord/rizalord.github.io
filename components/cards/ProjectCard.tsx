import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

export default function ProjectCard() {
  return (
    <Flex
      w="100%"
      bgColor="white"
      boxShadow="lg"
      borderRadius="md"
      direction="column"
      alignItems="center"
    >
      <Image
        src="https://rizalord-portfolio-cms.herokuapp.com/uploads/large_unpas_landing_page_dc8441a455.webp"
        alt="unpaslandingpage"
        width="full"
        fit="cover"
        height={{ base: "180px", md: "280px" }}
        borderTopRadius="md"
      />
      <Box py={4} px={4} width="full">
        <Text
          fontSize="2xl"
          mb={3}
          color={useColorModeValue("blackAlpha.800", "blackAlpha.800")}
        >
          Hugoblog - Free Blog Theme Nice
        </Text>
        <Text
          fontSize="lg"
          mb={3}
          color={useColorModeValue("blackAlpha.600", "blackAlpha.500")}
        >
          Clean, lightweight, and full SEO blog theme for Hugo SSG
        </Text>
        <HStack spacing={2}>
          <Tag size="lg" variant="solid" colorScheme="blue">
            SCSS
          </Tag>
          <Tag size="lg" variant="solid" colorScheme="blue">
            Bootstrap 5
          </Tag>
        </HStack>
      </Box>
    </Flex>
  )
}
