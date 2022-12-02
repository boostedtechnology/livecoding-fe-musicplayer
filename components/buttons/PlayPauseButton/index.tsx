import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { IconButton, IconButtonClick } from "../IconButton"

type PlayPauseButtonProps = {
  onClick: IconButtonClick
  isPlaying?: boolean
}

export const PlayPauseButton = ({
  onClick,
  isPlaying,
}: PlayPauseButtonProps) => {
  return (
    <IconButton onClick={onClick}>
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
    </IconButton>
  )
}
