import { SVGProps } from 'react'

export const AlertCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#F03D3D"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.168 18.349a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667ZM10.168 6.682v3.334M10.168 13.349h.01" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.168 .016)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
