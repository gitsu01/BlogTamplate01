import Link from 'next/link'
import React from 'react'
import styles from '../styles/Text.module.css'

function Secheader() {
  return (
    <>
      <header className="border font-mono">
        <div className="mx-auto flex max-w-7xl justify-between p-5">
          <div className={styles.text}>
            <Link href={'/'}>
              <h1 className="cursur-pointer text-3xl md:text-4xl">
                Indian<span className="text-green-600">Shala</span>
              </h1>
            </Link>
          </div>
          <Link href={'/'}>
            <div className="flex h-11 cursor-pointer items-center justify-center rounded-md bg-green-600 px-5">
              <h3 className="text-white">Back Home</h3>
            </div>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Secheader
