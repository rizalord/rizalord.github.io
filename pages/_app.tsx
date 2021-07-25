import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from 'next-seo'
import { AppProps } from "next/app"
import SEO from '../nuxt-seo.config'
import GlobalStyle from '../styles/GlobalStyle'
import theme from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO} />

      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  )
}
export default MyApp
