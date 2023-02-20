import React from 'react'

function Arrow({ location, dropdown }) {
  return (
    <svg
      onClick={dropdown}
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308"
        stroke={location === '/' ? 'white' : 'black'}
        strokeWidth="2"
      />
    </svg>
  )
}

export default Arrow
