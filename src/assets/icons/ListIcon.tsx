import React from 'react'

// import { Container } from './styles';

export const ListIcon = ({
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
        d="M13 15H31"
        stroke={color || '#B6BCC9'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 22H31"
        stroke={color || '#B6BCC9'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 29H31"
        stroke={color || '#B6BCC9'}
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
        stroke={color || '#B6BCC9'}
        strokeWidth="0.8"
      />
    </svg>
  )
}
