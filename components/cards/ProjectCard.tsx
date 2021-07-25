import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { Project } from "../../models/Project"

export default function ProjectCard({ data }: { data: Project }) {
  const image: string = data.fields.image.fields.file.url
  const title: string = data.fields.title
  const description: string = data.fields.description
  const tags: JSX.Element[] = data.fields.tags.map((e, i) => (
    <WrapItem key={i}>
      <Tag size="lg" variant="solid" colorScheme="blue">
        {e}
      </Tag>
    </WrapItem>
  ))

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
        src={image}
        alt={title}
        width="full"
        fit="fill"
        objectPosition="center"
        height={{ base: "220px", md: "280px", lg: "210px" }}
        borderTopRadius="md"
      />
      <Box py={4} px={4} width="full">
        <Text
          fontSize="2xl"
          mb={3}
          color={useColorModeValue("blackAlpha.800", "blackAlpha.800")}
        >
          {title}
        </Text>
        <Text
          fontSize="lg"
          mb={3}
          color={useColorModeValue("blackAlpha.600", "blackAlpha.500")}
        >
          {description}
        </Text>
        <Wrap spacing={2}>{tags}</Wrap>
      </Box>
    </Flex>
  )
}
