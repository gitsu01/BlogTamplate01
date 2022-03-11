import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
    <footer className='w-full h-auto bg-gray-500 mt-10 flex text-center items-center text-gray-200 py-3'>
        <span className='mx-auto'>&#169; 2022-23 <Link href="/"><span className='text-red-300 cursor-pointer hover:text-red-400 hover:underline'>IndianShala</span></Link>. All rights reserved </span>
    </footer>
  )
}

export default Footer;