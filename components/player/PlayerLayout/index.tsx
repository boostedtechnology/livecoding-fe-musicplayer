import { usePlayerContext } from "../../providers/PlayerContextProvider"
import { Controls } from "../Controls"
import { ProgressBar } from "../ProgressBar"
import { TrackDetails } from "../TrackDetails"

import * as S from "./styles"

export const PlayerLayout = () => {
  const { currentTrack } = usePlayerContext()

  return (
    <S.PlayerLayout>
      <TrackDetails
        artist={currentTrack?.artist || ""}
        title={currentTrack?.title || ""}
        year={currentTrack ? 2022 : undefined}
      />
      <div className="controls-progress">
        <Controls />
        <ProgressBar duration={currentTrack?.duration || 0} />
      </div>
    </S.PlayerLayout>
  )
}
