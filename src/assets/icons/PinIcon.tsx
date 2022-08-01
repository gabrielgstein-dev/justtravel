import { SVGProps } from 'react'

export const PinIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M12 13.5v0a3 3 0 0 1-3-3v0a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M12 21.5s-7-5.75-7-11a7 7 0 1 1 14 0c0 5.25-7 11-7 11Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
