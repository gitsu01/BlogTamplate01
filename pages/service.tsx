import Head from 'next/head';
import React from 'react';
import { FcServices } from 'react-icons/fc';
import Header from '../components/Header';
import { BsRecordCircle } from 'react-icons/bs';
import Secbut from '../components/SecBut';

function Service() {
  const Services = [
    {
      title: 'FrontEnd',
      image: './delivary.svg',
      link: './',
      fiverr: 'https://www.fiverr.com',
      project: 'https://www.github.com',
      _key: 'ser#0',
      description: 'We make for your dream website frontend using React.js, Next.js & Tailwinds'
    },
    {
      title: 'Front & Back',
      image: './delivary.svg',
      link: '/',
      fiverr: 'https://www.fiverr.com',
      project: 'https://www.github.com',
      _key: 'ser#1',
      description: 'We make for your dream website frontend using React.js, Next.js & Tailwinds'
    },
    {
      title: 'Web with Deploy',
      image: './delivary.svg',
      link: '/',
      fiverr: 'https://www.fiverr.com',
      project: 'https://www.github.com',
      _key: 'ser#2',
      description: 'We make for your dream website frontend using React.js, Next.js & Tailwinds'
    }
  ]

 
  
  return (

    <>
      <Head>
        <title>Service – IndianShala</title>
      </Head>
      <Header />
      <main className="mx-auto mt-6 max-w-7xl p-5 md:mt-20 md:p-0">
        <div className="flex items-center justify-center p-5 text-center md:p-0">
          <h1 className=" relative font-[Roboto] text-5xl font-extrabold uppercase text-gray-600 sm:text-7xl md:text-9xl">
            {' '}
            <span className="pr-0 text-green-600 md:pr-4">WebSite's</span>{' '}
            <br /> Build Your Own
            <img
              src="./staticweb.svg"
              className="absolute -right-8 top-6 hidden w-60 lg:block"
            />
          </h1>
        </div>

        

        {/* Service's  */}
        <h2 className="block space-x-2 border-b border-green-600 p-6 pb-2 font-mono text-4xl font-extrabold my-10">
            <FcServices className='inline fill-blue-500' /> Service's
          </h2>
        <div id='services' className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {Services.map((service) => (
            <div key={service._key} className= ' text-gray-600 border p-4 rounded shadow-md hover:border-green-600 transition-all ease-in-out'>
              <h2 className='font-bold uppercase font-mono text-2xl flex items-center pb-2 border-b'> <BsRecordCircle className='mr-4 fill-green-600'/> {service.title} </h2>
              <div className='mt-4'>
                <img src={service.image} loading='lazy' className='w-3/5 mx-auto' />
              </div>
              {/* <hr className='w-2/6 my-2' /> */}
              <p className='font-sans p-4 text-center text-lg font-medium'>
                {service.description}
              </p>              
              <a target='blank' href={service.project}><Secbut> View Project's </Secbut></a>
              <a target='blank' href={service.fiverr}><Secbut> Order on Fiverr </Secbut></a>
            </div>
          ))}
        </div>
    
      </main>
    </>
  )
}

export default Service
