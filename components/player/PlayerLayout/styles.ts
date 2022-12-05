import styled from "styled-components"

export const PlayerLayout = styled.div`
  display: grid;
  background-color: #191414;
  border-top: 1px solid white;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background.contrast};

  @media (max-width: 579px) {
    grid-template-rows: auto auto;
    gap: 12px;
  }

  @media (min-width: 580px) {
    grid-template-columns: 200px 1fr;
  }

  .controls-progress {
    display: flex;
    flex-flow: column nowrap;
    gap: 12px;
    align-content: center;
    height: 100%;

    & > div {
      &:first-of-type {
        margin-top: auto;
      }

      &:last-of-type {
        margin-bottom: auto;
      }
    }

    @media (min-width: 580px) {
      padding: 0 24px;
    }
  }
`
