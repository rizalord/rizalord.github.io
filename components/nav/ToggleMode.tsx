import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FaMoon, FaRegMoon, FaRegSun } from "react-icons/fa"

const ToggleMode = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle mode"
      icon={useColorModeValue(
        <FaMoon size="18px" color="#1A202C" />,
        <FaRegSun size="18px" color="#EEEFF0" />
      )}
      onClick={toggleColorMode}
      rounded="md"
      //   border="2px"
      //   borderColor={useColorModeValue("gray.200", "gray.700")}
      sx={{
        background: useColorModeValue(
          "rgba(239, 244, 246, 0.75)",
          "rgba(44, 49, 61, 1)"
        ),
        backdropFilter: "saturate(180%) blur(20px)",
      }}
    />
  )
}

export default ToggleMode
