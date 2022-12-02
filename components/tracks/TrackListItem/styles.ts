import styled from "styled-components"

import { TRACK_LIST_ROW_PADDING } from "../common/styles"

export const TrackListItem = styled.tr<{ isActive: boolean }>`
  gap: 32px;

  &:hover {
    background-color: #262626;
  }

  td {
    padding: ${TRACK_LIST_ROW_PADDING};

    svg,
    p {
      color: ${({ theme, isActive }) =>
        isActive ? theme.colors.fonts.green : theme.colors.fonts.white};
    }
  }
`
