import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react"

export default function SkillCard() {
  return (
    <Flex
      w="100%"
      bgColor="white"
      boxShadow="lg"
      borderRadius="md"
      direction="column"
      alignItems="center"
      py={5}
      px={3}
    >
      <Image
        src="/images/skills/laravel.png"
        alt="laravel"
        width={16}
        height={16}
      />

      <Text
        fontSize="xl"
        mt={4}
        mb={4}
        color={useColorModeValue("blackAlpha.900", "blackAlpha.900")}
        textAlign="center"
      >
        Laravel
      </Text>
      <Text
        fontSize="lg"
        textAlign="center"
        color={useColorModeValue("blackAlpha.900", "blackAlpha.800")}
      >
        <b>2 years</b> of experience.
      </Text>
    </Flex>
  )
}
