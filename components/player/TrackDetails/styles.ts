import styled from "styled-components"

export const TrackDetails = styled.div`
  @media (max-width: 579px) {
    display: flex;
    flex-flow: row wrap;
    gap: 12px 32px;
    padding-bottom: 24px;
  }

  @media (min-width: 580px) {
    border-right: 1px solid white;
  }

  p {
    &:first-of-type {
      font-weight: bold;
      font-size: 18px;
    }

    color: ${({ theme }) => theme.colors.fonts.white};
  }
`
