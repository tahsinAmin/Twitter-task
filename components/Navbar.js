import { MailIcon, BellIcon, SearchIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Navbar() {
   return (
      // <div className="navbar ">
         <div className="navbar sticky bottom-0 z-10 flex flex-col space-y-4 sm:hidden">
            <span className='text-3xl px-5 py-2.5 cursor-pointer relative inset-x-3/4 h-16 w-16 rounded-full font-bold bg-blue-500 text-white'>+</span>
            <div className=' px-6 flex justify-between h-12 p-2 items-center bg-white '>
               <HomeIcon className='h-8'/>
               <SearchIcon className='h-8'/>
               <BellIcon className='h-8'/>
               <MailIcon className='h-8'/>
            </div>
         </div>
      // </div>
   )
}

export default Navbar