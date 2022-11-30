import { ChakraProvider } from '@chakra-ui/react'
import theme from '@components/theme.fonts'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}