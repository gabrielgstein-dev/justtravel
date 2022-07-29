import { SVGProps } from 'react'

export const SuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.998 8.903v.767a8.333 8.333 0 1 1-4.942-7.617"
      stroke="#0BB07B"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m17.998 3.003-8.333 8.342-2.5-2.5"
      stroke="#0BB07B"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
