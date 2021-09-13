import { GoVerified } from 'react-icons/go'
import { FiMoreHorizontal, FiMessageCircle, FiRepeat,FiHeart, FiUpload, FiImage } from "react-icons/fi";
import { HiOutlineUserCircle }  from 'react-icons/hi'
import { GlobeIcon, EmojiHappyIcon, UserCircleIcon } from '@heroicons/react/solid'
import { AiOutlineFileGif } from 'react-icons/ai'

const data = [
   {
      id:1,
      name:"Kevin Hart",
      username:"@KevinHart4Real",
      verified:true,
      time: "12h",
      msgBody: "Just posted a photo https://youtu.be/9jX?sasdzczx/...",
      msg:"3.2K",
      repeat:"3.2K",
      heart:"3.2K",
   },
   {
      id:2,
      name:"Kevin Hart",
      username:"@KevinHart4Real",
      verified:true,
      time: "12h",
      msgBody: "Just posted a photo https://youtu.be/9jX?sasdzczx/...",
      msg:"3.2K",
      repeat:"3.2K",
      heart:"3.2K",
   },
   {
      id:3,
      name:"Kevin Hart",
      username:"@KevinHart4Real",
      verified:true,
      time: "12h",
      msgBody: "Just posted a photo https://youtu.be/9jX?sasdzczx/...",
      msg:"3.2K",
      repeat:"3.2K",
      heart:"3.2K",
   },
   {
      id:4,
      name:"Kevin Hart",
      username:"@KevinHart4Real",
      verified:true,
      time: "12h",
      msgBody: "Just posted a photo https://youtu.be/9jX?sasdzczx/...",
      msg:"3.2K",
      repeat:"3.2K",
      heart:"3.2K",
   },
   {
      id:5,
      name:"Kevin Hart",
      username:"@KevinHart4Real",
      verified:true,
      time: "12h",
      msgBody: "Just posted a photo https://youtu.be/9jX?sasdzczx/...",
      msg:"3.2K",
      repeat:"3.2K",
      heart:"3.2K",
   },
]


function Content() {
   // console.log(data);
   return (
      <div className="w-full">
         {/* Tweet-Body */}
         <div className="h-auto hidden md:flex justify-between pb-3">
            <div className='md:w-2/12 pt-4 pl-5'>
               <UserCircleIcon className='h-16 w-16 mx-auto'/>
            </div>
            <div className=' flex flex-col space-y-3 pt-8 md:w-10/12'>
               <div className='flex flex-col space-y-3'>
                  <textarea type="text" className='pr-4 text-2xl font-normal outline-none' placeholder="What's Happening"/>
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
         
         {/* Others' Tweets */}
         {data.map(({id, name, username, verified, time, msgBody, msg, repeat, heart}) => (
            <div key={id} className="flex justify-between border border-r-0 border-l-0"> 
                        <div className="h-auto w-1/5 py-4 flex justify-center">
               <div className="rounded-full h-14 w-14 flex items-center justify-center bg-gray-400 "></div>
            </div>
            <div className="words p-4 flex flex-col justify-between w-4/5 space-y-2">
               
               <div>
                  <div className="mb-1 flex justify-between items-center">
                     <div className="flex items-center space-x-1 px-1">
                        <h3 className='text-base font-bold text-gray-800 '>{name}</h3>
                        <GoVerified color='blue'/>
                        <h3 className='text-base font-normal text-gray-600'>{username}</h3>
                     </div>
                     <FiMoreHorizontal color='gray'/>
                  </div>
                  <div className="body">
                     {msgBody}
                  </div>
               </div>

               {/* Messages, Retweets, Hearts by others for this tweet */}
               <div className='flex justify-between items-center'>
                  <div className="flex w-12 justify-between items-center">
                     <FiMessageCircle/> {msg}
                  </div>
                  <div className="flex w-12 justify-between items-center">
                     <FiRepeat/> {repeat}
                  </div>
                  <div className="flex w-12 justify-between items-center">
                     <FiHeart/> {heart}
                  </div>
                  <FiUpload/>
               </div>
            </div>
         </div>
         ))}
      </div>
   )
}

export default Content