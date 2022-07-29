import type { NextPage } from 'next'
import { useState } from 'react'
import { RadioButton } from 'src/atoms'

const Home: NextPage = () => {
  const [checked, setChecked] = useState('')
  const onChangeHandle = (prop: string) => {
    setChecked(prop)
  }
  return (
    <div style={{ width: '400px', height: '200px' }}>
      <RadioButton
        name={'test-label'}
        checked={checked}
        onChange={onChangeHandle}
        radioChildren={[
          {
            label: 'Label 1',
            value: 'label1',
          },
          {
            label: 'Label 2',
            value: 'label2',
            disabled: true,
          },
        ]}
      />
    </div>
  )
}

export default Home
