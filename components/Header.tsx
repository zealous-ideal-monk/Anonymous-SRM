import Image from 'next/image'
import React from 'react'
import { BeakerIcon, HomeIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon, StarIcon } from '@heroicons/react/24/outline'

function Header() {
  return (
    <div className='sticky top-0
     z-50 flex bg-white px-4 py-2 shadow-sm '>
      <div className='relative h-10 w-20'>
           <Image
           src="/Logo.jpeg"
           width={100}
           height={0}
           alt="Logo"
         />
     </div>

     <div className='mx-7 flex items-center text-black'>
      <HomeIcon className='h-5 w-5' />
      <p>Home</p>
      <ChevronDownIcon className='h-5 w-5' />
     </div>
    </div>
    
  )
}

export default Header