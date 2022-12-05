import { ThemeProvider } from "styled-components"

import "../styles/globals.css"
import { theme } from "../theme/theme"
import { PlayerContextProvider } from "../components/providers"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <PlayerContextProvider>
        <Component {...pageProps} />
      </PlayerContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
