import React from 'react'

const Secbut = (props) => {
  return (
    <button className=" my-2 flex w-full cursor-pointer items-center justify-center rounded bg-green-500 p-3 font-mono text-2xl font-medium text-white transition-all ease-in-out hover:bg-red-500">
      {props.children}
    </button>
  )
}

export default Secbut
