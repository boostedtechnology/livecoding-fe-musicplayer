import {
  NextPrevButton,
  PlayPauseButton,
  RepeatButton,
  ShuffleButton,
} from "../../buttons"
import { NextPrevValues } from "../../buttons/NextPrevButton"
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
      <NextPrevButton type={NextPrevValues.PREV} />
      <PlayPauseButton isPlaying={isPlaying} onClick={handleTogglePlayPause} />
      <NextPrevButton type={NextPrevValues.NEXT} />
      <RepeatButton />
    </S.Controls>
  )
}
