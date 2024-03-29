import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import useAuth from '../hooks/useAuth'
import { CheckIcon } from '@heroicons/react/24/solid'

const Plans = () => {

  const {logout} = useAuth()

  return (
    <div>
        <Head>
            <title>Netflix</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>


        <header className='border-b border-white/10 bg-[#141414]'>
          <Link href='/'>
            <img
              src="https://rb.gy/ulxxee"
              width={150}
              height={90}
              className="cursor-pointer object-contain"
              />
          </Link>

          <button onClick={logout} className='text-lg font-medium hover:underline'>Sign Out</button>

        </header>


        <main className='pt-28 max-w-5xl px-5 pb-12 transition-all md:px-10'>
          <h1 className='mb-3 text-3xl font-medium'>Choose the Plan that is right for you!</h1>
          <ul>
            <li className='flex items-center gap-x-2 text-lg'>
              <CheckIcon className='h-7 w-7 text-[#e50914]'></CheckIcon>
              Watch all you want Ad-Free
            </li>
            <li className='flex items-center gap-x-2 text-lg'>
              <CheckIcon className='h-7 w-7 text-[#e50914]'></CheckIcon>
              Recommendations just for you!
            </li>
            <li className='flex items-center gap-x-2 text-lg'>
              <CheckIcon className='h-7 w-7 text-[#e50914]'></CheckIcon>
              Change or Cancel your plan anytime
            </li>
          
          </ul>

          <div className='mt-4 flex flex-col space-y-4'>
            <div className='flex w-full items-center justify-end self-end md:w-3/5'>
              
            </div>

            {/* <Table></Table> */}
            <button>Subscribe</button>

          </div>


        </main>
        
    </div>
  )
}

export default Plans