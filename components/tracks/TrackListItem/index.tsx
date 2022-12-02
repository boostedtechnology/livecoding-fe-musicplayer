import { useState } from "react"

import { formatDate } from "../../../helpers/format-date"
import { TrackDetailsType } from "../../player/common/types.common"
import { PlayPauseButton } from "../../buttons"

import * as S from "./styles"
import { usePlayerContext } from "../../providers/PlayerContextProvider"

interface TrackListItemProps {
  trackNumber: number
  track: TrackDetailsType
}

export const TrackListItem = ({ trackNumber, track }: TrackListItemProps) => {
  const { artist, duration, title } = track
  const { currentTrack, setCurrentTrack, isPlaying, togglePlayPause } =
    usePlayerContext()
  const [showPlayIcon, setShowPlayIcon] = useState<boolean>(false)

  const handleMouseEvent = (mouseIn) => {
    setShowPlayIcon(mouseIn)
  }

  const handlePlayPause = () => {
    currentTrack?.title === title ? togglePlayPause() : setCurrentTrack(track)
  }

  const handleRowClick = (e) => {
    //on double click, play the song
    e.detail === 2 && setCurrentTrack(track)
  }

  return (
    <S.TrackListItem
      isActive={currentTrack?.title === title}
      className="track-list-item"
      onMouseEnter={() => handleMouseEvent(true)}
      onMouseLeave={() => handleMouseEvent(false)}
      onClick={handleRowClick}
    >
      <td>
        {showPlayIcon ? (
          <PlayPauseButton
            isPlaying={currentTrack?.title === title}
            onClick={handlePlayPause}
          />
        ) : (
          <p>{trackNumber}</p>
        )}
      </td>
      <td>
        <p>{title}</p>
      </td>
      <td>
        <p>{artist}</p>
      </td>
      <td>
        <p>{formatDate(duration)}</p>
      </td>
    </S.TrackListItem>
  )
}
