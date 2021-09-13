import {CgProfile } from 'react-icons/cg'
import { WiStars } from 'react-icons/wi'

function Header() {
   return (
      <header className='w-full sticky top-0 bg-white border border-r-0 border-l-0 flex justify-between items-center lg:hidden md:h-12 p-4'>
         <div className="home flex items-center space-x-4">
            <CgProfile className='text-blue-200 md:hidden' size='2.5em'/>
            <h2 className="refresh font-bold text-2xl md:text-lg text-gray-800">Home</h2>
         </div>

         <div className="sparkle" ><WiStars size='2.5em'/></div>
      </header>
   )
}



export default Header
