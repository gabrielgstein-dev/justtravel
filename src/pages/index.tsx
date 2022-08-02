import type { NextPage } from 'next'

import { useAppDispatch, useAppSelector } from '@core/redux'
import { kenya } from '@core/redux/slices'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const { data, pending, error } = useAppSelector(kenya.selectKanye)

  return (
    <div>
      <h2>Generate random Kanye West quote</h2>
      {pending && <p>Loading...</p>}
      {data && <p>{data.quote}</p>}
      {error && <p>Oops, something went wrong</p>}
      <button
        onClick={() => dispatch(kenya.getKanyeQuote())}
        disabled={pending}
      >
        Generate Kanye Quote
      </button>
    </div>
  )
}

export default Home
