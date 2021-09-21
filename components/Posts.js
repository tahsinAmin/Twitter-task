import React from 'react'
import { GoVerified } from 'react-icons/go'
import { DotsHorizontalIcon, ChatIcon, RefreshIcon, HeartIcon, UploadIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/themes/light.css';

const data = [
   {
      id:1,
      name:"Kevin Hart",
      username:"@KevinHart4Real",
      verified:true,
      time: "· 12h",
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
      time: "· 12h",
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
      time: "· 12h",
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
      time: "· 12h",
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
      time: "· 12h",
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
      time: "· 12h",
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
            <div key={id} className="flex justify-between border border-gray-100 border-r-0 border-l-0 hover:bg-gray-100 transition duration-700 ease-out"> 
               <div className="w-2/12 py-4 flex justify-center h-auto">   

                  <Tippy placement={'bottom'} theme={'light'} interactive={true} content={
                     <div className="flex-col space-y-2 max-w-xs p-2">
                        <div className="flex justify-between space-x-2">
                           <div className="flex-col">
                              <Image src={`https://source.unsplash.com/50x50/?man`}
                                 width={50}
                                 height={50}
                                 layout="fixed"
                                 className='rounded-full'
                              />
                              <div className="flex space-x-1 items-center">
                                 <h3 className='text-base font-bold text-gray-800'>{name}</h3>
                                 <GoVerified color='blue'/>
                              </div>
                              <h3 className='text-base font-normal text-gray-600 truncate'>{username}</h3>
                           </div>
                           <div className="flex-col  justify-start pt-1">
                           <button className="text-white bg-gray-800 rounded-full p-2 px-4">Follow</button>
                           </div>
                        </div>
                        <p className="">"We only see what we know" - John Wolfgang von Goethe</p>
                        <div className="flex space-x-6">
                           <p><span className='font-bold'>2,492</span> Following</p>
                           <p><span className='font-bold'>2.8M</span>  Followers</p>
                        </div>
                        <div className="flex space-x-2">
                        <Image src={`https://source.unsplash.com/50x50/?old`}
                           width={20}
                           height={20}
                           layout="fixed"
                           className='rounded-full'
                        />
                        <p>Followed by Keenu Reeves</p>
                        </div>
                     </div>
                  }>
                     <div className="">
                     <Image src={`https://source.unsplash.com/50x50/?man`}
                        width={50}
                        height={50}
                        layout="fixed"
                        className='rounded-full'
                     />
                     </div>
                  </Tippy>
               </div>

               <div className="words py-4 pr-4 flex flex-col justify-between w-10/12 space-y-2">               
                  <div className='flex flex-col space-y-2'>
                     <div className="mb-1 flex justify-between items-center">
                        <div className="flex items-center space-x-1 px-1 ">
                           <h3 className='text-base font-bold text-gray-800'>{name}</h3>
                           <GoVerified color='blue'/>
                           <h3 className='text-base font-normal text-gray-600 truncate'>{username}</h3>
                           <h3 className='text-base font-normal text-gray-600 truncate'>{time}</h3>
                        </div>
                        <DotsHorizontalIcon color='gray' className='h-6 cursor-pointer'/>
                     </div>
                     <div className="body">
                        {msgBody}
                     </div>
                     <div className='relative h-64 w-11/12'>
                        <Image src={`https://source.unsplash.com/1024x699/?nature,water,man`} layout='fill' className='rounded-lg'/>
                     </div>
                  </div>

                  {/* Messages, Retweets, Hearts by others for this tweet */}
                  <div className='flex justify-between items-center pr-10'>
                     <div className="flex w-12 justify-between items-center cursor-pointer">
                        <ChatIcon/> {msg}
                     </div>
                     <div className="flex w-12 justify-between items-center cursor-pointer">
                        <RefreshIcon/> {repeat}
                     </div>
                     <div className="flex w-12 justify-between items-center cursor-pointer">
                        <HeartIcon/> {heart}
                     </div>
                     <UploadIcon className='h-4 cursor-pointer'/>
                  </div>
               </div>
            </div>
         ))} 
      </>
   )
}

export default Posts
