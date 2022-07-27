import React from 'react'

import * as S from './Text.style'
import { TextProps } from './Text.interface'

export const Text = ({ children, ...props }: TextProps) => {
  return <S.Paragraph {...props}>{children}</S.Paragraph>
}

Text.p1 = (props: TextProps) => <Text {...props} size={'large'} />
Text.p2 = (props: TextProps) => <Text {...props} size={'medium'} />
Text.p2Bold = (props: TextProps) => <Text {...props} size={'medium'} bold />
Text.p3 = (props: TextProps) => <Text {...props} size={'normal'} />
Text.p4 = (props: TextProps) => <Text {...props} size={'small'} />
