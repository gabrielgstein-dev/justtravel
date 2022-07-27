import { SizeType } from '@model/types'

export interface TextInternalProps {
  size?: SizeType
  bold?: boolean
}

export interface TextProps extends TextInternalProps {
  children: React.ReactNode
}
