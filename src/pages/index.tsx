import type { NextPage } from 'next'
import { Input, Text } from 'src/atoms'

const Home: NextPage = () => {
  const onChangeHandle = (prop: string) => {
    console.log(prop)
  }
  return (
    <div style={{ width: '400px', height: '200px' }}>
      <Input value="asd" onChange={onChangeHandle} />

      <Text.p1>Aeeeee</Text.p1>
      <Text.p1>Aeeeee</Text.p1>
    </div>
  )
}

export default Home
