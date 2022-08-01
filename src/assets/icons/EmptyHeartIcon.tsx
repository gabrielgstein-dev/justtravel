import { SVGProps } from 'react'

export const EmptyHeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M12.382 5.711C13.072 4.905 14.263 4 16.078 4c3.175 0 5.304 2.98 5.304 5.755 0 5.801-7.222 10.245-9 10.245-1.778 0-9-4.444-9-10.245C3.382 6.98 5.512 4 8.686 4c1.815 0 3.007.905 3.696 1.711Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
