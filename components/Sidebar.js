import { FaTwitter }  from 'react-icons/fa'

import Image from 'next/image'
import { HomeIcon, PlusCircleIcon } from '@heroicons/react/solid'
import { BellIcon, UserIcon, DotsHorizontalIcon, BookmarkIcon, ViewListIcon, HashtagIcon, MailIcon, DotsCircleHorizontalIcon } from '@heroicons/react/outline'

import SidebarRow from './SidebarRow'
function Sidebar() {
   return (
      <div className="sidebar">
         <div className="rounded-full h-screen sm:flex flex-col justify-between sm:py-3 md:py-1 lg:pb-4 md:px-4 items-center"> {/* class: hidden*/}
            <div className="flex flex-col items-center space-y-4">
               <div className="flex flex-col space-y-3 lg:pt-3">
                  <div className='px-4'>
                     <FaTwitter className=' cursor-pointer h-8 w-8 text-blue-500 hover:text-blue-600 hover:scale-110'/> 
                  </div>
                  <div className='flex cursor-pointer items-center space-x-4 hover:bg-gray-200 rounded-full px-4 py-2'>
                     <HomeIcon className='h-`7 w-7 text-gray-800'/>
                     <p className="hidden xl:inline-flex text-xl font-semibold">Home</p>
                  </div>
                  <SidebarRow Icon={HashtagIcon} title="Explore"/>
                  <SidebarRow Icon={BellIcon} title="Notifications"/>
                  <SidebarRow Icon={MailIcon} title="Mail"/>
                  <div className='nav__item--secondary'>
                     <SidebarRow Icon={BookmarkIcon} title="Bookmark"/>
                     <SidebarRow Icon={ViewListIcon} title="List"/>
                  </div>
                  <SidebarRow Icon={UserIcon} title="Profile"/>
                  <SidebarRow Icon={DotsCircleHorizontalIcon} title="More"/>
                                    
               </div>

               <div className="items-center">
                  <div className="hidden xl:block rounded-full bg-blue-400 text-white text-lg font-semibold cursor-pointer hover:bg-blue-500 text-center py-3 px-16">Tweet</div>
                  <PlusCircleIcon className='xl:hidden text-blue-400 h-12'/>
               </div>

            </div>
            <div className='flex space-x-7 items-center hover:bg-gray-200 rounded-full p-2'>
               <div className='flex space-x-3'>
                  <Image src={`https://source.unsplash.com/50x50/?nature`}
                     width={50}
                     height={50}
                     layout="fixed"
                     className='rounded-full'
                  />
                  <div className='hidden xl:block'>
                     <div className='text-base font-semibold text-gray-800'>Tahsin</div>
                     <div className='text-base font-semibold text-gray-500'>@tahsin123</div>
                  </div>
               </div>
               <DotsHorizontalIcon className='hidden xl:block h-5 w-5'/>
            </div>
         </div>
      </div>
   )
}

export default Sidebar