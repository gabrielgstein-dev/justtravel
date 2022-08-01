import { SVGProps } from 'react'

export const WifiIcon: React.FC<SVGProps<SVGSVGElement>> = ({
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
      d="M9 14.438a.28.28 0 0 0-.28.28.28.28 0 1 0 .561 0 .282.282 0 0 0-.282-.28M3.443 9c3.07-2.815 8.044-2.815 11.113 0M1.196 5.853c4.31-3.804 11.298-3.804 15.609 0M5.684 11.866a4.707 4.707 0 0 1 6.631 0"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
