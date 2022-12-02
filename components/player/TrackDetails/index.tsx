import { TrackDetailsType } from "../common/types.common"
import * as S from "./styles"

interface TrackDetailsProps extends Omit<TrackDetailsType, "duration"> {
  year?: number
}

export const TrackDetails = ({ artist, title, year }: TrackDetailsProps) => {
  return (
    <S.TrackDetails>
      <p>{title || ""}</p>
      <p>{artist || ""}</p>
      <p>{year || ""}</p>
    </S.TrackDetails>
  )
}
