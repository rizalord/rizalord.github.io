import { theme as defaultTheme, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: `'Lexend', ${defaultTheme.fonts.heading}`,
    body: `'Lexend', ${defaultTheme.fonts.body}`,
  },
  colors: {
    brand: {
      blue: "#2A61CC",
      dark: "#1D1F28",
      light: "#EFF4F6",
    },
  },
})

export default theme
