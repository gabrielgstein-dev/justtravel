import { SVGProps } from 'react'

export const CoffeIcon: React.FC<SVGProps<SVGSVGElement>> = ({
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
      d="M2.998 7.875H12a.75.75 0 0 1 .75.75v2.25a4.502 4.502 0 0 1-4.501 4.503h-1.5a4.502 4.502 0 0 1-4.503-4.502V8.625a.75.75 0 0 1 .75-.75Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.126 5.624a1.36 1.36 0 0 1 0-1.876c.5-.525.5-1.35 0-1.876M7.5 5.624a1.36 1.36 0 0 1 0-1.876c.5-.525.5-1.35 0-1.876M4.873 5.624a1.36 1.36 0 0 1 0-1.876c.5-.525.5-1.35 0-1.876M12.097 13.213l1.385-.317a2.923 2.923 0 0 0 2.27-2.849v0a2.173 2.173 0 0 0-2.172-2.172h-1.954"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
