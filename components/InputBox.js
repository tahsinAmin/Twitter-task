import { FiImage } from "react-icons/fi";
import { EmojiHappyIcon, UserCircleIcon } from '@heroicons/react/solid'
import { AiOutlineFileGif } from 'react-icons/ai'

function InputBox() {
   return (
      <div className="h-auto hidden md:flex justify-between pb-3">
            <div className='md:w-2/12 pt-4 pl-1'>
               <UserCircleIcon className='h-16 w-16 mx-auto'/>
            </div>
            <div className='flex flex-col space-y-3 pt-8 md:w-10/12'>
               <div className='flex flex-col space-y-3'>
                  <input type="text" className='pr-4 text-2xl font-normal outline-none' placeholder="What's Happening"/>
                  {/* <div className='flex items-center space-x-1'>
                     <GlobeIcon className='h-5 inline'/>
                     <p>Everyone can reply</p>
                  </div>
                  <div className='border-b-2 w-full'></div> */}
               </div>
               <div className='flex justify-between mt-0 align-middle'>
                  <div className="flex justify-between space-x-2">
                     <FiImage className='' size='1.5em'/>
                     <AiOutlineFileGif size='1.4em'/>
                     <EmojiHappyIcon className='h-6'/>
                  </div>
                  <button className="py-3 mr-3 px-5 bg-blue-300 text-xs font-bold text-white rounded-full">Tweet</button>
               </div>
            </div>
         </div>
   )
}

export default InputBox
