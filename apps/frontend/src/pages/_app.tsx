import { AppProps } from "next/app"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Montserrat } from "next/font/google"
import { SessionProvider } from "next-auth/react"
import Layout from "../components/Layout/Layout"
import { ApolloProvider } from "@apollo/client"
import { GraphQLClient } from "../graphql/graphql-client"
import { Provider } from "react-redux"
import store from "../store/store"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontSize: "13px",
        fontWeight: "700",
        lineHeight: "1.6",
      },
    },
  },
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#E1E1E1",
      300: "#BDBDBD",
      400: "#B1B1B1",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    spotify: "#1DB954",
  },
})

const montserrat = Montserrat({
  style: ["normal", "italic"],
  subsets: ["latin"],
})

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <ApolloProvider client={GraphQLClient}>
          <Provider store={store}>
            <main className={montserrat.className}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </main>
          </Provider>
        </ApolloProvider>
      </SessionProvider>
    </ChakraProvider>
  )
}

export default App
