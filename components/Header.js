// import Image from 'next/image'
import { UserCircleIcon } from '@heroicons/react/solid'
import { WiStars } from 'react-icons/wi'

// const handleChange = (e) => {
//    e.preventDefault();
//    window.scroll({top:0, left:0, behavior:'smooth'})
// }

function Header() {
   return (
      <header className='w-full sticky top-0 z-50 bg-white shadow-sm flex justify-between border-gray-100 border-t items-center md:h-12 p-4'>
         <div className="flex items-center space-x-4">
            <UserCircleIcon className='text-blue-200 md:hidden h-10'/>
            {/* <Image src={`https://source.unsplash.com/50x50/?nature,water,mountain,landscape`}
               width={40}
               height={40}
               layout="fixed"
               className='rounded-full md:hidden'
            /> */}

            {/* refresh once clicked */}
            <h2
             className="font-bold text-2xl md:text-lg text-gray-800"
            //  onClick={(e)=> handleChange}
            >
               Home
            </h2>
         </div>

         <div className="sparkle  cursor-pointer p-0.5  rounded-full hover:bg-gray-100" ><WiStars size='2.5em'/></div>
      </header>
   )
}

export default Header