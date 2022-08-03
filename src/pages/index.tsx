import type { NextPage } from 'next'
import { Header, HeaderSearchAddon } from '@organisms'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HeaderSearchAddon />
    </>
  )
}

export default Home
