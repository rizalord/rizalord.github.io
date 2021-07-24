import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import GlobalStyle from '../styles/GlobalStyle'
import theme from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  )
}
export default MyApp
