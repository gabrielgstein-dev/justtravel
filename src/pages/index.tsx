import type { NextPage } from 'next'
import { Header, HeaderSearchAddon, TicketFilter } from '@organisms'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HeaderSearchAddon />
      <TicketFilter />
    </>
  )
}

export default Home
