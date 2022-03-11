import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}
export default function Home({ posts }: Props) {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Head>
          <title>Home – IndianShala</title>
        </Head>

        <Header />
        {/* Header components */}

        {/* Main page banner */}
        <div className=" flex items-center justify-between border-b py-6 lg:py-0 overflow-hidden">
          <div className="space-y-5 px-5 md:px-10">
            <h1 className="max-w-xl font-serif text-6xl">
              <span className="underline decoration-black decoration-4">
                IndianShala
              </span>{" "}
              help you to build esey to make an web
            </h1>
            <h2 className="text-md font-mono">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <Link href={'/service#services'}>
              <h3 className=" shadow-inner w-40 cursor-pointer rounded-full border border-white bg-green-600 px-4 py-3 text-center font-medium tracking-wider text-white transition ease-in-out hover:bg-red-500">
                Get Started
              </h3>
            </Link>
          </div>

          <img
            className="hidden md:pb-0 md:p-10  md:h-96 md:inline-flex lg:h-[32rem]"
            src='/homemain.svg'
          />
        </div>

        {/* post */}
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer overflow-hidden rounded-lg border shadow-sm bg-white">
                <img
                  className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105 "
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                  loading='lazy'
                />
                <div className="flex items-center justify-between bg-white p-5">
                  <div>
                    <p className="text-xl font-bold">{post.title}</p>
                    <p className="pr-3 text-xs">
                      {post.description} by{' '}
                      <span className="text-red-500">{post.author.name}</span>
                    </p>
                  </div>
                  <img
                    className="h-12 w-12 rounded-full shadow"
                    src={urlFor(post.author.image).url()!}
                    alt=""
                  />
                </div>
              </div>
            </Link>
            
          ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"][0..8]| order(_createdAt desc){
    _id,
    title,
    author->{
    name,
    image
  },
  description,
  mainImage,
  slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
