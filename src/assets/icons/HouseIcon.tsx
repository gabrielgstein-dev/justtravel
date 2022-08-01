import { SVGProps } from 'react'

export const HouseIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  color,
  ...props
}) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.25 8.036 9 2.25l6.75 5.786"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.214 7.209v8.541h11.572V2.25h-2.893v2.48"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.072 15.75v-3.322a1.5 1.5 0 0 1 1.5-1.5h.857a1.5 1.5 0 0 1 1.5 1.5v3.322"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
