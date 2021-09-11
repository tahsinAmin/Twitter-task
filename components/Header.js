import {CgProfile } from 'react-icons/cg'
import { WiStars } from 'react-icons/wi'

function Header() {
   return (
      <header className='sticky top-0 z-10 bg-white shadow-md border flex justify-between items-center h-16 p-1'>
         <div className="home flex items-center space-x-4">
            <div className="profile">
               <CgProfile className='text-blue-200' size='2.5em'/>
            </div>
            <h2 className="refresh font-bold text-2xl text-gray-800">Home</h2>
         </div>

         <div className="sparkle" ><WiStars size='2.5em'/></div>
      </header>
   )
}



export default Header
