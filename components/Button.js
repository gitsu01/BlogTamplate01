import React from 'react'

const Button = (props) =>  {
  return (
    <button className='bg-green-600 text-white h-11 w-11 rounded flex justify-center items-center text-2xl cursor-pointer'>
        {props.children}
    </button>
  )
}

export default Button;