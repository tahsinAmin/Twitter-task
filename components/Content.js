import { GoVerified } from 'react-icons/go'
import { FiMoreHorizontal, FiMessageCircle, FiRepeat,FiHeart, FiUpload } from "react-icons/fi";

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
]

function Content() {
   // console.log(data);
   return (
      <div className="w-screen">
         {data.map(({id, name, username, verified, time, msgBody, msg, repeat, heart}) => (
            <div key={id} className="h-40 flex justify-between border border-t-1 border-b-1">
            <div className="h-auto w-1/5 py-4 flex justify-center">
               <div className="rounded-full h-14 w-14 flex items-center justify-center bg-gray-400 "></div>
            </div>
            <div className="words p-4 flex flex-col justify-between w-4/5">
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