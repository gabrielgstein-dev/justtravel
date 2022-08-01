import type { NextPage } from 'next'
import { TravelCard } from 'src/molecules'

import CityImage from '@assets/images/city-image.jpg'

const Home: NextPage = () => {
  return (
    <div style={{ width: '700px', height: '200px' }}>
      <TravelCard
        title="Lorem ipsum dolor amet consectetur"
        location="GetYourGuide Tours & Tickets GmbH"
        originalPrice={2351.28}
        promoPrice={1391.28}
        reviewsQty={423}
        rank={'6.3'}
        img={CityImage}
      />
    </div>
  )
}

export default Home
