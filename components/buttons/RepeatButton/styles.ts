import styled from "styled-components"

import { RepeatStateType } from "../../providers/PlayerContextProvider"
import { IconButton } from "../IconButton"

export const RepeatButton = styled(IconButton)<{ repeat: RepeatStateType }>`
  position: relative;

  &:after {
    ${({ repeat, theme }) =>
      repeat === "single" &&
      `
        position: absolute;
        content: "1";
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        left: -10px;
        top: -8px;
        color: ${theme.colors.fonts.white};
        background-color: ${theme.colors.fonts.green};
        width: 16px;
        height: 16px;
        font-weight: bold;
        border-radius: 40px;
        text-align: center;
        font-size: 10px;
    `}
  }

  &&& svg {
    color: ${({ repeat, theme }) =>
      [RepeatStateType.ALL, RepeatStateType.SINGLE].includes(repeat)
        ? theme.colors.fonts.green
        : theme.colors.fonts.white};
  }
`
