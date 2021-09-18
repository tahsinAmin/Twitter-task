import { GoVerified } from 'react-icons/go'
import { FiMoreHorizontal, FiMessageCircle, FiRepeat,FiHeart, FiUpload, FiImage } from "react-icons/fi";
import { HiOutlineUserCircle }  from 'react-icons/hi'

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
   {
      id:6,
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

function Posts() {
   return (
      <>
        {data.map(({id, name, username, verified, time, msgBody, msg, repeat, heart}) => (
            <div key={id} className="flex justify-between border border-r-0 border-l-0"> 
               <div className="w-2/12 py-4 flex justify-center">
                  <div className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-400 "></div>
               </div>

               <div className="words py-4  pr-4 flex flex-col justify-between w-10/12 space-y-2">               
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
      </>
   )
}

export default Posts
