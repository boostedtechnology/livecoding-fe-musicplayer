import styled from "styled-components"

import { buttonReset } from "../../../theme/utils"

export const IconButton = styled.button`
  ${buttonReset}
  display: flex;
  flex-flow: column;

  & > * {
    margin: auto;
  }
`
