import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { Skill } from "../../models/Skill"

export default function SkillCard({ data }: { data: Skill }) {
  const imageSrc: string = data.fields.logo.fields.file.url
  const name: string = data.fields.name
  const count: number = data.fields.countExperience
  const type: string = data.fields.skillType.fields.name

  return (
    <Flex
      w="100%"
      bgColor="white"
      boxShadow="lg"
      borderRadius="md"
      direction="column"
      alignItems="center"
      py={5}
      px={5}
    >
      <Image src={imageSrc} alt={name} width={16} height={16} fit="contain" />

      <Text
        fontSize="xl"
        mt={4}
        mb={4}
        color={useColorModeValue("blackAlpha.900", "blackAlpha.900")}
        textAlign="center"
      >
        {name}
      </Text>
      <Text
        fontSize="lg"
        textAlign="center"
        color={useColorModeValue("blackAlpha.900", "blackAlpha.800")}
      >
        <b>
          {count} {type}
        </b>{" "}
        of experience.
      </Text>
    </Flex>
  )
}
