import type { NextPage } from 'next'
import { IconButton } from 'src/atoms'

import { ArrowRight } from 'src/assets/icons/ArrowRight'

const Home: NextPage = () => {
  return (
    <div>
      <IconButton
        icon={<ArrowRight />}
        label="Click"
        variant="secondary"
        onClick={() => console.log('asd')}
      />
    </div>
  )
}

export default Home
