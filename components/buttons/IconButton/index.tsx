import * as S from "./styles"

export type IconButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => void

type IconButtonProps = {
  children: React.ReactNode
  className?: string
  onClick: IconButtonClick
}

export const IconButton = ({
  children,
  className,
  onClick,
}: IconButtonProps) => {
  const handleClick = (e) => {
    onClick(e)
  }

  return (
    <S.IconButton className={className} onClick={handleClick}>
      {children}
    </S.IconButton>
  )
}
