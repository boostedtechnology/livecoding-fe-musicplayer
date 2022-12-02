import { faRepeat } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { usePlayerContext } from "../../providers/PlayerContextProvider"

import * as S from "./styles"

export const RepeatButton = () => {
  const { repeat, handleRepeat } = usePlayerContext()

  return (
    <S.RepeatButton repeat={repeat} onClick={() => handleRepeat()}>
      <FontAwesomeIcon icon={faRepeat} />
    </S.RepeatButton>
  )
}
