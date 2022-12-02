import styled from "styled-components"

export const TrackDetails = styled.div`
  padding: 0 24px 0 0;

  @media (max-width: 579px) {
    display: flex;
    flex-flow: row wrap;
    gap: 12px 32px;
    padding: 0 0 24px 0;
  }

  @media (min-width: 580px) {
    border-right: 1px solid white;
    min-height: 66px;
  }

  p {
    &:first-of-type {
      font-weight: bold;
      font-size: 18px;
    }

    color: ${({ theme }) => theme.colors.fonts.white};
  }
`
