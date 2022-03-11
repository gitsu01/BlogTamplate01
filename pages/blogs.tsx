import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

function Blogs({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Blog's – IndianShala</title>
      </Head>
      <Header />
      <main className="mx-auto max-w-7xl">
        {/* <h2 className="block space-x-2 border-b border-green-600 p-10 pb-2 font-mono text-4xl font-extrabold">
          All Posts
        </h2> */}
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 ">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm">
                <img
                  className=" h-80 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105 "
                  src={urlFor(post.mainImage).url()!}
                  loading="lazy"
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
      </main>
    </>
  )
}

export default Blogs

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] [0..19] | order(_createdAt desc){
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
