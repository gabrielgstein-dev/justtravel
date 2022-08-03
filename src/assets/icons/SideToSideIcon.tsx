import React from 'react'

// import { Container } from './styles';

export const SideToSideIcon = ({
  color,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.75 19.75H15C13.895 19.75 13 18.855 13 17.75V15C13 13.895 13.895 13 15 13H17.75C18.855 13 19.75 13.895 19.75 15V17.75C19.75 18.855 18.855 19.75 17.75 19.75Z"
        stroke={color || '#4070F4'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 19.75H26.25C25.145 19.75 24.25 18.855 24.25 17.75V15C24.25 13.895 25.145 13 26.25 13H29C30.105 13 31 13.895 31 15V17.75C31 18.855 30.105 19.75 29 19.75Z"
        stroke={color || '#4070F4'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.75 31H15C13.895 31 13 30.105 13 29V26.25C13 25.145 13.895 24.25 15 24.25H17.75C18.855 24.25 19.75 25.145 19.75 26.25V29C19.75 30.105 18.855 31 17.75 31Z"
        stroke={color || '#4070F4'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 31H26.25C25.145 31 24.25 30.105 24.25 29V26.25C24.25 25.145 25.145 24.25 26.25 24.25H29C30.105 24.25 31 25.145 31 26.25V29C31 30.105 30.105 31 29 31Z"
        stroke={color || '#4070F4'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="0.4"
        y="0.4"
        width="43.2"
        height="43.2"
        rx="1.6"
        stroke={color || '#4070F4'}
        strokeWidth="0.8"
      />
    </svg>
  )
}
