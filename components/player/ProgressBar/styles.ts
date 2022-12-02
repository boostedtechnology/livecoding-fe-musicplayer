import styled from "styled-components"

export const ProgressBar = styled.div<{
  percentElapsed: number
}>`
  display: flex;
  width: 100%;

  .progress-bar__inner {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    max-width: 600px;
    margin: auto;
    gap: 16px;

    & > * {
      align-self: center;
    }
  }

  .progress-bar__track {
    position: relative;
    height: 4px;
    flex-grow: 2;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.fonts.gray};
  }

  .progress-bar__elapsed {
    position: absolute;
    border-radius: 5px;
    width: ${({ percentElapsed }) => percentElapsed}%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.fonts.white};
    transition: ${({ percentElapsed }) =>
      percentElapsed !== 0 && "all 1s linear"};
  }

  .progress-bar__number {
    color: ${({ theme }) => theme.colors.fonts.white};
  }
`
