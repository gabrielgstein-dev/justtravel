import { TitleSizeType } from '@model/types'

export interface TitleInternalProps {
  size?: TitleSizeType
  bold?: boolean
}

export interface TitleProps extends TitleInternalProps {
  children: React.ReactNode
}
