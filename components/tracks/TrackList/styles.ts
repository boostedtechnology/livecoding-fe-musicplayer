import styled from "styled-components"

import { TRACK_LIST_ROW_PADDING } from "../common/styles"

export const TrackList = styled.div`
  display: flex;
  flex-flow: column;
  overflow: auto;
  background-color: #191414;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      border-bottom: 1px solid white;

      th {
        color: ${({ theme }) => theme.colors.fonts.white};
        text-align: left;
        padding: ${TRACK_LIST_ROW_PADDING};
      }
    }
  }
`
