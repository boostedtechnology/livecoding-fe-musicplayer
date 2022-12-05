import { useEffect, useState } from "react"
import { formatTime } from "../../../helpers/format-time"

import { usePlayerContext } from "../../providers/PlayerContextProvider"
import { TrackDetailsType } from "../common/types.common"

import * as S from "./styles"

interface ProgressBarProps extends Pick<TrackDetailsType, "duration"> {}

let interval

export const ProgressBar = ({ duration }: ProgressBarProps) => {
  const { isPlaying, currentTrack, nextTrack } = usePlayerContext()
  const [secondsElapsed, setSecondsElapsed] = useState(0)

  useEffect(() => {
    interval = setInterval(() => {
      if (secondsElapsed >= duration) {
        nextTrack()
      } else {
        setSecondsElapsed(secondsElapsed + 1)
      }
    }, 1000)

    if (interval && !isPlaying) clearInterval(interval)

    return () => clearInterval(interval)
  }, [duration, secondsElapsed, isPlaying])

  useEffect(() => {
    setSecondsElapsed(0)
  }, [currentTrack])

  return (
    <S.ProgressBar
      className="progress-bar"
      percentElapsed={(secondsElapsed / duration) * 100}
    >
      <div className="progress-bar__inner">
        <p className="progress-bar__number">{formatTime(secondsElapsed)}</p>
        <div className="progress-bar__track">
          <div className="progress-bar__elapsed"></div>
        </div>
        <p className="progress-bar__number">{formatTime(duration)}</p>
      </div>
    </S.ProgressBar>
  )
}
