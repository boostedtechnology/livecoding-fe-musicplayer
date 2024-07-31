import '../styles/globals.css'
import { MusicProvider } from './context'

function MyApp({ Component, pageProps }) {
  return <MusicProvider><Component {...pageProps} /></MusicProvider>
}

export default MyApp
