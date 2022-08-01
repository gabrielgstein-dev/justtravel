import React from 'react'
import { theme } from '@theme'

import { EnumTitleSize } from '@model/enum'

import { TitleProps } from './Title.interface'

export const Title = ({ children, size, ...props }: TitleProps) => {
  const Component = theme.components.title.getTitleSizeStyle(size)
  return <Component {...props}>{children}</Component>
}

Title.h1 = (props: TitleProps) => <Title {...props} size={EnumTitleSize.H1} />
Title.h2 = (props: TitleProps) => <Title {...props} size={EnumTitleSize.H2} />
Title.h3 = (props: TitleProps) => <Title {...props} size={EnumTitleSize.H3} />
