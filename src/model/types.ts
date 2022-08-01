import { SVGProps } from 'react'

export type VariantType = 'primary' | 'secondary' | 'disabled'
export type SupportType = 'success' | 'error' | 'disabled'
export type SizeType = 'large' | 'normal' | 'medium' | 'small'
export type TitleSizeType = 'h1' | 'h2' | 'h3' | 'h4'
export type InputSharedStyle = 'iconPaddingRight' | 'inputWithIconDefaultStyle'
export type IconType = () => ({
  color,
  ...props
}: SVGProps<SVGSVGElement>) => JSX.Element
