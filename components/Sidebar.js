import { FiTwitter }  from 'react-icons/fi'
import { HiOutlineUserCircle }  from 'react-icons/hi'
import { BellIcon, MailIcon, UserIcon, HomeIcon, DotsHorizontalIcon, UserCircleIcon } from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'

function Sidebar() {
   return (
      <div className='hidden float-left  md:w-1/12 border h-screen md:flex flex-col justify-between py-3 items-center'>
         <div className="s">
            <div className="flex flex-col items-center space-y-4">
               <div className="flex flex-col items-center space-y-8">
                  <FiTwitter className='mb-2' size='2.5em'/>
                  <HomeIcon/>
                  <SearchIcon/>
                  <BellIcon/>
                  <MailIcon/>
                  <UserIcon/>
                  <DotsHorizontalIcon/>

               </div>
               <div className="rounded-full h-14 w-14 bg-blue-400 "></div>
            </div>
         </div>
         <HiOutlineUserCircle size='4.5em'/>
         {/* <UserCircleIcon/> */}
      </div>
   )
}

export default Sidebar