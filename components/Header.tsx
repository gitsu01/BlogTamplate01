import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { GiCrossedBones } from 'react-icons/gi'
import styles from '../styles/Text.module.css'
import Button from './Button'

function Header() {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: 'HOME', link: '/', _id: '0s+a0' },
    { name: "BLOG'S", link: '/blogs', _id: '0s+a1' },
    { name: 'SERVICE', link: '/service', _id: '0s+a2' },
    { name: 'ABOUT', link: '/about', _id: '0s+a3' },
  ]

  return (
    <>
      <header className="mx-auto flex max-w-7xl bg-white md:bg-transparent p-5">
        <div className="flex w-full flex-col md:flex-row md:justify-between">
          <div className='flex justify-between items-center mb-3 md:mb-0 z-30'>
            <div className={styles.text}>
              <Link href={'/'}>
                <h1 className="cursur-pointer text-3xl md:text-4xl">
                  Indian<span className='text-green-600'>Shala</span>
                </h1>
              </Link>
            </div>
            <div className='block md:hidden' onClick={() => setOpen(!open)}>
            <Button>
              {!open ? (<HiMenuAlt2 />) : (<GiCrossedBones />)}
            </Button>
            </div>            
          </div>

          <div className={`flex flex-col z-10 space-x-0 border-t sm:space-y-0 md:flex-row md:space-x-5 md:border-none absolute md:static left-0 w-full md:w-auto bg-white transition-all ease-in ${open ? 'top-[5rem]' : 'top-[-490px]'}`}>
            {Links.map((link) => (
              <Link key={link._id} href={link.link}>
                <h4 className="cursor-pointer p-3 font-[Ubuntu] text-base font-medium hover:text-green-600 transition ease-in-out">
                  {' '}
                  {link.name}{' '}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
