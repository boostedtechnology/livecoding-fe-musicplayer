import { useState } from "react"

import { Layout, PlayerLayout, TrackList, TrackListItem } from "../components"
import { usePlayerContext } from "../components/providers/PlayerContextProvider"

export default function Home() {
  const { trackList } = usePlayerContext()

  return (
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
  )
}
