import { FiTwitter }  from 'react-icons/fi'
import { HiOutlineUserCircle }  from 'react-icons/hi'
import { BellIcon, UserIcon, HomeIcon, DotsHorizontalIcon, BookmarkIcon, ViewListIcon, HashtagIcon, MailIcon } from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'
function Sidebar() {
   return (
      <div className="hidden  rounded-full h-screen md:flex flex-col justify-between xl:py-3 items-center">
            <div className="s">
               <div className="flex flex-col items-center space-y-4">
                  <div className="flex flex-col space-y-4 lg:pt-4">
                     <SidebarRow className='mb-2' Icon={FiTwitter} title=""/>
                     <SidebarRow Icon={HomeIcon} title="Home"/>
                     <SidebarRow Icon={HashtagIcon} title="Explore"/>
                     <SidebarRow Icon={BellIcon} title="Notifications"/>
                     <SidebarRow Icon={MailIcon} title="Mail"/>
                     <SidebarRow Icon={BookmarkIcon} title="Bookmark"/>
                     <SidebarRow Icon={ViewListIcon} title="List"/>
                     <SidebarRow Icon={UserIcon} title="Profile"/>
                     <SidebarRow Icon={DotsHorizontalIcon} title="More"/>
                  </div>

                  <div className="items-center">
                     <div className="hidden xl:visible rounded-full h-12 w-full bg-blue-400 text-white text-2xl text-center py-1">Tweet</div>
                     <div className="xl:hidden rounded-full h-16 w-16 bg-blue-400 "></div>
                  </div>

               </div>
            </div>
            <div className='flex space-x-7 items-center hover:bg-gray-200 rounded-full px-5 py-2'>
               <div className='flex space-x-3'>
                  <HiOutlineUserCircle size='3em'/>
                  <div className='hidden xl:block'>
                     <div className='text-base font-semibold text-gray-800'>Tahsin</div>
                     <div className='text-base font-semibold text-gray-500'>@tahsin123</div>
                  </div>
               </div>
               <DotsHorizontalIcon className='hidden xl:block h-5 w-5'/>
            </div>
      </div>
   )
}

export default Sidebar

