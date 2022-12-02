import {
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { usePlayerContext } from "../../providers/PlayerContextProvider"
import { IconButton } from "../IconButton"

export enum NextPrevValues {
  NEXT = "next",
  PREV = "prev",
}

type NextPrevButtonType = {
  type: NextPrevValues
}

export const NextPrevButton = ({ type }: NextPrevButtonType) => {
  const { nextTrack, prevTrack } = usePlayerContext()

  const handleClick = () => {
    switch (type) {
      case "next":
        nextTrack()
        break
      case "prev":
        prevTrack()
        break
      default:
        console.log("error: unmet condition")
    }
  }

  return (
    <IconButton onClick={handleClick}>
      <FontAwesomeIcon
        icon={type === NextPrevValues.NEXT ? faForwardStep : faBackwardStep}
      />
    </IconButton>
  )
}
