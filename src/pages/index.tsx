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
      <Text.p2>Aeeeee</Text.p2>
      <Text.p3>Aeeeee</Text.p3>
      <Text.p4>Aeeeee</Text.p4>
    </div>
  )
}

export default Home
