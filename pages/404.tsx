import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Secheader from '../components/Secheader';

function errorPage() {
  return (
    <div>
        <Head>
            <title>Not Found – IndianShala</title>
        </Head>
        <Secheader/>
        <main className='max-w-7xl m-auto flex uppercase flex-col items-center mt-32 p-4 font-extrabold font-mono'>
            <h1 className='text-9xl text-red-400 px-6 pb-1 border-b tracking-[.5rem]'>404</h1>
            <h4 className=' text-2xl text-gray-500 pt-4'>OOPS! This Page is Not Found</h4>
            <Link href={'/'}>
                <span className=' mt-6 px-7 py-3 rounded-full bg-green-500 cursor-pointer text-xl text-white tracking-[.15rem] font-sans font-medium hover:bg-red-400 shadow'>Home</span>
            </Link>
        </main>
    </div>
  )
}

export default errorPage;