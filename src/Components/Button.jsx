/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
const Button = (props) => {
  return (
<button type="button" className={` button1 py-4 px-10 bg-black  shadow-lg shadow-gray-500/100 font-poppins font-medium text-[18px]
text-white outline-none ${props.style} rounded-[${props.rounded}] ${props.text} ` }> {props.title}</button>
  )
}
export default Button