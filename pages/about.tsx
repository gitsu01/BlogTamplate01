import React from 'react'
import '../styles/Text.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Membar } from '../typings'
import Head from 'next/head'
import { FcAbout } from 'react-icons/fc'
import { AiOutlineTeam } from 'react-icons/ai'

interface Props {
  membars: [Membar]
}

function About({ membars }: Props) {

  return (
    <>
    <Head>
        <title>About – IndianShala</title>
      </Head>
      <Header />
      <div className="mx-auto flex max-w-7xl flex-col items-center p-5">
        <div className='w-full'>          
        <h2 className="block space-x-2 border-b border-green-600 p-6 pb-2 font-mono text-4xl font-extrabold">
        <FcAbout className='inline fill-green-600'/> About<span className='hidden sm:inline'> IndianShala</span><span className=' sm:hidden'>Us</span>
        </h2>
        </div>
        <div className="mt-10 flex justify-between">          
          <div className="">            
            <p className=" p-3 text-2xl font-medium text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              voluptatum minima, neque nobis quos ab incidunt iste perspiciatis
              vitae enim, necessitatibus temporibus ipsa! Beatae necessitatibus,
              iste vitae, quae dolore blanditiis eos eligendi reprehenderit
              natus dolores iusto facilis ipsa repudiandae sint ab dolorem
              excepturi eveniet inventore dolorum a? In, voluptas veritatis.
            </p>
          </div>
          <img src="/about.svg" className=" hidden md:h-80 lg:h-96 lg:block ml-0 lg:ml-14 " />
        </div>

        <div className="mt-10">
          <h2 className="block space-x-2 border-b border-green-600 p-6 pb-2 font-mono text-4xl font-extrabold">
            <AiOutlineTeam className='inline fill-blue-500' /> Our Team
          </h2>
          <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-10">
            {membars.map((membar) => (
              <div key={membar._id} className='p-5 rounded border flex flex-col sm:flex-row space-x-4 transition ease-in-out shadow hover:border-green-600'>
                <img
                  className=" w-full h-72 sm:h-auto sm:w-2/5 object-cover rounded-md"
                  src={urlFor(membar.image).url()!}
                  loading='lazy'
                />
                <div className=' text-center sm:text-left mt-5 sm:mt-0'>
                  <h1 className='text-3xl font-mono font-bold'>{membar.name}</h1>
                  <h4 className='text-green-600 text-lg'> {membar.job} </h4>
                  <p className=' text-base '> {membar.description} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default About;

export const getServerSideProps = async () => {
  const query = `*[_type == "membar"]{
    _id,
  name,
  image,
  job,
  description
  }`

  const membars = await sanityClient.fetch(query)

  return {
    props: {
      membars,
    },
  }
}
