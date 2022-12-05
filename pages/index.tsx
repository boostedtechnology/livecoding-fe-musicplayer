import Head from "next/head"

import { Layout, PlayerLayout, TrackList, TrackListItem } from "../components"
import { usePlayerContext } from "../components/providers/PlayerContextProvider"

export default function Home() {
  const { trackList } = usePlayerContext()

  return (
    <>
      <Head>
        <title>Music Player</title>
        <meta property="og:title" content="Music Player" key="title" />
      </Head>
      <Layout>
        <TrackList>
          {trackList.map((props, i) => (
            <TrackListItem
              key={`${props.title}-${props.artist}`}
              trackNumber={i + 1}
              track={props}
            />
          ))}
        </TrackList>
        <PlayerLayout />
      </Layout>
    </>
  )
}
