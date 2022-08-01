import { SVGProps } from 'react'

export const TravelAirlineIcon: React.FC<SVGProps<SVGSVGElement>> = ({
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
      clipRule="evenodd"
      d="M16.5 4.875a1.5 1.5 0 0 0-1.5-1.5h-1.5a.45.45 0 0 0-.416.33 1.41 1.41 0 0 1-2.74 0 .45.45 0 0 0-.415-.33H3a1.5 1.5 0 0 0-1.5 1.5v8.25a1.5 1.5 0 0 0 1.5 1.5h6.93a.451.451 0 0 0 .415-.33 1.409 1.409 0 0 1 2.74 0 .45.45 0 0 0 .415.33H15a1.5 1.5 0 0 0 1.5-1.5v-8.25Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m4.5 9.75.667-.73-.667-.77M6 10.875l1.554-1.859L6 7.125M5.167 9.023 9 9M11.625 11.438v-.376M11.625 9.187v-.375M11.625 6.937v-.375"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
