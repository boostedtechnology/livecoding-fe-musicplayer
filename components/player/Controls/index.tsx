import {
  NextPrevButton,
  PlayPauseButton,
  RepeatButton,
  ShuffleButton,
} from "../../buttons"
import { usePlayerContext } from "../../providers/PlayerContextProvider"

import * as S from "./styles"

export const Controls = () => {
  const {
    currentTrack,
    setCurrentTrack,
    trackList,
    togglePlayPause,
    isPlaying,
  } = usePlayerContext()

  const handleTogglePlayPause = () => {
    if (typeof currentTrack === "undefined" && !isPlaying) {
      setCurrentTrack(trackList[0])
    }

    togglePlayPause()
  }

  return (
    <S.Controls>
      <ShuffleButton />
      <NextPrevButton type="prev" />
      <PlayPauseButton isPlaying={isPlaying} onClick={handleTogglePlayPause} />
      <NextPrevButton type="next" />
      <RepeatButton />
    </S.Controls>
  )
}
