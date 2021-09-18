import {CgProfile } from 'react-icons/cg'
import { WiStars } from 'react-icons/wi'

// const handleChange = (e) => {
//    e.preventDefault();
//    window.scroll({top:0, left:0, behavior:'smooth'})
// }

function Header() {
   return (
      <header className='w-full sticky top-0 bg-white shadow-sm flex justify-between items-center  md:h-12 p-4'>
         <div className="flex items-center space-x-4">
            <CgProfile className='text-blue-200 md:hidden' size='2.5em'/>
            {/* refresh once clicked */}
            <h2
             className="font-bold text-2xl md:text-lg text-gray-800 cursor-pointer"
            //  onClick={(e)=> handleChange}
            >
               Home
            </h2>
         </div>

         <div className="sparkle" ><WiStars size='2.5em'/></div>
      </header>
   )
}

export default Header