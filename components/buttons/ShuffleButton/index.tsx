import { faShuffle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { IconButton } from "../IconButton"
import { usePlayerContext } from "../../providers/PlayerContextProvider"

import * as S from "./styles"

export const ShuffleButton = () => {
  const { shuffle, isShuffled } = usePlayerContext()

  const handleClick = () => {
    shuffle()
  }

  return (
    <S.ShuffleButton isShuffled={isShuffled} onClick={handleClick}>
      <FontAwesomeIcon icon={faShuffle} />
    </S.ShuffleButton>
  )
}
