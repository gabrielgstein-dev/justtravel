import { StaticImageData } from 'next/image'

export interface TravelCardProps {
  title: string
  location: string
  img?: StaticImageData
  rank: string
  reviewsQty: number
  originalPrice: number
  promoPrice: number
}
