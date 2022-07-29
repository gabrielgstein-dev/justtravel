import type { NextPage } from 'next'
import { useState } from 'react'
import { Switch } from 'src/atoms'

const Home: NextPage = () => {
  const [checked, setChecked] = useState(false)
  const onChangeHandle = (prop: boolean) => {
    setChecked(prop)
  }
  return (
    <div style={{ width: '400px', height: '200px' }}>
      <Switch
        onChange={onChangeHandle}
        checked={checked}
        label={`Primeira ${checked}`}
      />
    </div>
  )
}

export default Home
