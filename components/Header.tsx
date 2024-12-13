import Image from 'next/image'
import React, { BlockquoteHTMLAttributes } from 'react'
import { 
  ChatBubbleBottomCenterIcon, 
  HomeIcon,
  Bars3CenterLeftIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/solid'

import { 
  ChevronDownIcon,
  MagnifyingGlassIcon, 
  BellIcon, 
  PlusIcon, 
  SparklesIcon,
  SpeakerWaveIcon,
  VideoCameraIcon,
  GlobeAmericasIcon
} from '@heroicons/react/24/outline'

function Header() {
  return (
    <div className='sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-2 shadow-sm lg:px-8'>
      <div className='relative h-8 w-16 md:h-10 md:w-20 lg:h-12 lg:w-24 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-300'>
           <Image
           src="/Logo.jpeg"
           alt="Logo"
           fill
           className='object-contain'
           sizes='(max-width: 768px) 80px 120px'
           priority
         />
    </div>

     <div className='mx-7 flex items-center text-black xl:min-w-[300px]'>
      <HomeIcon className='h-5 w-5' />
      <p className='ml-2 hidden flex-1 lg:inline'> Home </p>
      <ChevronDownIcon className='h-5 w-5' />
     </div>

     {/* Search Box */}
     
     <form className='flex flex-1 items-center space-x-2 rounded-lg border border-gray-200 px-3 py-1'>
     <MagnifyingGlassIcon className='h-6 w-6 text-gray-400 self-center' />
     <input type="text" placeholder='SEARCH' className='text-black placeholder:text-gray-400 bg-transparent focus:outline-none' />
     <button type='submit' hidden />
     </form>

     <div className='flex  h-12 w-12 text-black'>
      <SparklesIcon className='icon ' />
      <GlobeAmericasIcon className='icon' /> 
      <VideoCameraIcon className='icon' />
      <hr className='h-10 border border-gray-100'/>
      <ChatBubbleLeftIcon className='icon'/>
      <BellIcon className='icon'/>
      <PlusIcon className='icon'/>
      <SpeakerWaveIcon className='icon'/>
    </div>
    </div>
    
  )
}

export default Header