import styled from "styled-components"

export const Controls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 24px;
  align-self: center;

  svg {
    color: ${({ theme }) => theme.colors.fonts.white};
    font-size: 28px;
  }
`
