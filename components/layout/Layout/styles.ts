import styled from "styled-components"

export const Layout = styled.div`
  display: flex;
  flex-flow: column;
  height: 1vh;
  min-height: 400px;

  .layout-inner {
    display: grid;
    height: 100%;
    width: 100%;

    @media (min-width: 580px) {
      grid-template-rows: minmax(400px, max-content) 120px;
    }

    @media (max-width: 579px) {
      grid-template-rows: minmax(400px, max-content) auto;
    }
  }
`
