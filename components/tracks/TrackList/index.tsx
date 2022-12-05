import * as S from "./styles"

type TrackListProps = {
  children: React.ReactNode
}

export const TrackList = ({ children }: TrackListProps) => {
  return (
    <S.TrackList>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </S.TrackList>
  )
}
