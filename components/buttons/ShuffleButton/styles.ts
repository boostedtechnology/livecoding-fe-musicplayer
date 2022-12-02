import styled from "styled-components"

import { IconButton } from "../IconButton"

export const ShuffleButton = styled(IconButton)<{ isShuffled: boolean }>`
  &&& svg {
    color: ${({ theme, isShuffled }) =>
      isShuffled ? theme.colors.fonts.green : theme.colors.fonts.white};
  }
`
