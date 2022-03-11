import { GetStaticProps } from 'next'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import Head from 'next/head'
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post
}

function Post({ post }: Props) {
  const [ submitted, setSubmitted ] = useState(false);
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch('/api/createComment',{
        method: 'POST',
        body: JSON.stringify(data),
    }).then(() => {
        setSubmitted(true);
    }).catch((err) => {
        setSubmitted(false);
    })
  };

  return (
    <main key={post._id}>
      <Head>
        <title>{post.title} – IndianShala</title>
      </Head>
      <Header />

      <img
        className="h-40 w-full object-cover"
        src={urlFor(post.mainImage).url()!}
        alt=""
      />

      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 text-3xl font-semibold capitalize font-mono pb-1 border-b">{post.title}</h1>
        <h2 className="mb-4 pl-4 text-lg font-light text-gray-500">
          – {post.description}
        </h2>
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt=""
          />
          <p className="text-extralight text-sm">
            Blog Post by{' '}
            <span className="text-green-600">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div>
          <PortableText
            className="mt-6"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold text-gree-600" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="my-5 text-xl font-bold" {...props} />
              ),
              normal: (props: any) => (
                <p className="my-4 text-lg md:text-base font-sans" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ herf, children }: any) => (
                <a href={herf} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
              Image: ({ src }: any) => (
                <img src={src} className="rounded border border-black" />
              )
            }}
          />
        </div>
      </article>
      
      <div className='max-w-2xl mx-auto flex items-center justify-center space-x-5 p-3 px-3 border md:rounded-full shadow-md'>
        <h4 className='text-2xl font-mono fony-bold'>
          Shere Post : 
        </h4>
        <div className='flex space-x-2'>
            <FacebookShareButton url={`http://localhost:3000/post/${post.slug.current}`}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>
            <WhatsappShareButton url={`http://localhost:3000/post/${post.slug.current}`}>
              <WhatsappIcon size={40} round />
            </WhatsappShareButton>
            <RedditShareButton url={`http://localhost:3000/post/${post.slug.current}`}>
              <RedditIcon size={40} round />
            </RedditShareButton>
            <LinkedinShareButton url={`http://localhost:3000/post/${post.slug.current}`}>
              <LinkedinIcon size={40} round />
            </LinkedinShareButton>
        </div>
      </div>

      <hr className="my-5 mx-auto max-w-lg border border-green-600" />

      {(submitted) ? (
        <div className="mx-auto mb-10 flex max-w-2xl flex-col p-5">
          <h2>Submitted</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-10 flex max-w-2xl flex-col p-5">
        <h3 className="text-sm text-green-600">Enjoyed this article?</h3>
        <h4 className="text-3xl font-bold">Leave a comment below!</h4>
        <hr className="mt-2 py-3" />

        <input {...register('_id')} type="hidden" name="_id" value={post._id} />

        <label className="mb-5 block">
          <span className="font-mono text-gray-700">Your Name</span>
          <input
            {...register('name', { required: true })}
            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none focus:border-green-600"
            type="text"
            placeholder="Elon Mask"
          />
        </label>
        <label className="mb-5 block">
          <span className="font-mono text-gray-700">Your Email</span>
          <input
            {...register('email', { required: true })}
            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none focus:border-green-600 "
            type="email"
            placeholder="elon@tesla.com"
          />
        </label>
        <label className="mb-5 block">
          <span className="font-mono text-gray-700">Comment here</span>
          <textarea
            {...register('comment', { required: true })}
            className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none focus:border-green-600 "
            placeholder="Write your comment.."
            rows={8}
          />
        </label>

        <div className='flex flex-col p-5'>
            {errors.name && (
                <span className='text-red-400 pb-2 bottom-1 '>– The Name field is required</span>
            )}
            {errors.email && (
                <span className='text-red-400 pb-2 bottom-1 '>– The Email field is required</span>
            )}
            {errors.comment && (
                <span className='text-red-400 pb-2 bottom-1 '>– The Comment field is required</span>
            )}
        </div>

        <input type="submit" className='shadow bg-green-600 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 cursor-pointer rounded ' />
      </form>
      )}

      {/* comments here */}
      <div className='flex flex-col p-10 my-10 max-w-2xl mx-auto shadow shadow-green-600 space-y-2'>
        <h3 className='text-3xl'>Comments</h3>
        <hr className='pb-2'/>
        {post.comments.map((comment) => (
          <div key={comment._id}>
            <p><span className='text-green-600'>{comment.name} : </span>{comment.comment}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug{
        current,
      }
      }`
  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author->{
          name,
          image
        },
        'comments': *[
          _type == 'comment' && 
          post._ref == ^._id &&
          approved == true],
        description,
        mainImage,
        slug,
        body
      }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}

