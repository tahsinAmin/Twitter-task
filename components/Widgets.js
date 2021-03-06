import Image from 'next/image'
import {
   SearchIcon,
   CogIcon
 } from "@heroicons/react/outline";
 import {  DotsHorizontalIcon } from '@heroicons/react/solid'
 import { GoVerified } from 'react-icons/go'
 
 function Widgets() {
   return (
      <div className='hidden lg:flex flex-col px-7 pb-20 space-y-2 max-w-[800px] xl:min-w-[400px] h-screen overflow-y-auto scrollbar-hide'>

         {/* Searchbar */}
         <div className="sticky top-0 z-50 bg-white p-2">
            <div className="md:flex items-center rounded-full p-2 focus:border-2 bg-gray-50 focus:border-gray-100">
               <SearchIcon className="h-6 text-gray-600" />
               <input
                  className="w-full ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink"
                  placeholder="Search Twitter"
               />
            </div>
         </div>
         
         {/* Trendings */}
         <div className="flex-col rounded-2xl bg-gray-50">
            <div className='flex justify-between items-center px-4 py-2'>
               <h4 className='text-xl font-bold'>Trends For You</h4>
               <CogIcon className='h-6 w-6'/>
            </div>
            <div className='flex-col hover:bg-gray-100 py-4 px-4 space-y-1 cursor-pointer transition duration-700 ease-out'>
               <div className='flex justify-between text-gray-500'>
                  <p className='text-xs font-semibold'>Trending in Bangladesh</p>
                  <DotsHorizontalIcon className='h-4 w-4'/>
               </div>
               <h4 className='text-sm font-semibold'>#AurraBhatnagarBadoni</h4>
               <p className='text-xs font-semibold text-gray-500'>19.2K Tweets</p>
            </div>

            <div className='flex-col hover:bg-gray-100 px-4 py-4 space-y-1 cursor-pointer transition duration-700 ease-out'>
               <div className='flex justify-between text-gray-500'>
                  <p className='text-xs font-semibold'>Trending in Bangladesh</p>
                  <DotsHorizontalIcon className='h-4 w-4'/>
               </div>
               <h4 className='text-sm font-semibold'>#AurraBhatnagarBadoni</h4>
               <p className='text-xs font-semibold text-gray-500'>19.2K Tweets</p>
            </div>

            <div className='flex-col hover:bg-gray-100 px-4 py-4 space-y-1 cursor-pointer transition duration-700 ease-out'>
               <div className='flex justify-between text-gray-500'>
                  <p className='text-xs font-semibold'>Politics ?? Trending</p>
                  <DotsHorizontalIcon className='h-4 w-4'/>
               </div>
               <h4 className='text-sm font-semibold'>#America</h4>
               <p className='text-xs font-semibold text-gray-500'>470K Tweets</p>
            </div>

            <div className='px-4 py-4'>
               <span className='text-sm text-blue-500 hover:underline cursor-pointer'>Show more</span>
            </div>
         </div>

         {/* Who to follow */}
         <div className="who-to-follow flex-col rounded-2xl bg-gray-50">

            <h4 className='text-xl font-bold px-4 py-2'>Who to follow</h4>

            <div className='flex-col hover:bg-gray-100 py-4 px-4 space-y-1 cursor-pointer transition duration-700 ease-out'>
               <div className='flex justify-between text-gray-500 '>
                  <div className="">
                     <div className="flex justify-between"> 
                        <div className="flex justify-center">
                           <Image src={`https://source.unsplash.com/50x50/?nature,water,mountain,landscape`}
                              width={50}
                              height={50}
                              layout="fixed"
                              className='rounded-full'
                           />
                        </div>

                        <div className="pr-4 flex flex-col justify-between space-y-2">               
                           <div>
                              <div className="mb-1 flex justify-between items-center">
                                 <div className='flex-col hover:bg-gray-100 px-2 cursor-pointer'>
                                    <div className="flex items-center space-x-1">
                                       <h3 className='text-base font-bold text-gray-800 '>ESPN</h3>
                                       <GoVerified color='blue'/>
                                    </div>
                                    <h3 className='text-base font-normal text-gray-600'>#espn</h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center">
                     <button className="py-2 mr-3 px-5 bg-gray-900 text-xs font-bold text-white rounded-full  hover:opacity-90">Follow</button>
                  </div>
               </div>
            </div>

            

            <div className='flex-col hover:bg-gray-100 py-4 px-4 space-y-1 cursor-pointer transition duration-700 ease-out'>
               <div className='flex justify-between text-gray-500'>
                  <div className="">
                     <div className="flex justify-between"> 
                        <div className="flex justify-center">
                           <Image src={`https://source.unsplash.com/50x50/?nature,water,mountain,landscape`}
                              width={50}
                              height={50}
                              layout="fixed"
                              className='rounded-full'
                           />
                        </div>

                        <div className="pr-4 flex flex-col justify-between space-y-2">               
                           <div>
                              <div className="mb-1 flex justify-between items-center">
                                 <div className='flex-col hover:bg-gray-100 px-2 cursor-pointer'>
                                    <div className="flex items-center space-x-1">
                                       <h3 className='text-base font-bold text-gray-800 '>ESPN</h3>
                                       <GoVerified color='blue'/>
                                    </div>
                                    <h3 className='text-base font-normal text-gray-600'>#espn</h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center">
                     <button className="py-2 mr-3 px-5 bg-gray-900 text-xs font-bold text-white rounded-full  hover:opacity-80">Follow</button>
                  </div>
               </div>
            </div>

            <div className='flex-col hover:bg-gray-100 py-4 px-4 space-y-1 cursor-pointer transition duration-700 ease-out'>
               <div className='flex justify-between text-gray-500 '>
                  <div className="">
                     <div className="flex justify-between"> 
                        <div className="flex justify-center">
                                                      <Image src={`https://source.unsplash.com/50x50/?nature,water,mountain,landscape`}
                              width={50}
                              height={50}
                              layout="fixed"
                              className='rounded-full'
                           />
                        </div>

                        <div className="pr-4 flex flex-col justify-between space-y-2">               
                           <div>
                              <div className="mb-1 flex justify-between items-center">
                                 <div className='flex-col hover:bg-gray-100 px-2 cursor-pointer'>
                                    <div className="flex items-center space-x-1">
                                       <h3 className='text-base font-bold text-gray-800 '>ESPN</h3>
                                       <GoVerified color='blue'/>
                                    </div>
                                    <h3 className='text-base font-normal text-gray-600'>#espn</h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center">
                     <button className="py-2 mr-3 px-5 bg-gray-900 text-xs font-bold text-white rounded-full  hover:opacity-80">Follow</button>
                  </div>
               </div>
            </div>
            

            <div className='px-4 py-4'>
               <span className='text-sm text-blue-500 hover:underline cursor-pointer'>Show more</span>
            </div>
         </div>

         {/* Footer */}
         <div className="flex-col space-y-1">
            <div className='flex space-x-2 h-auto'>
               <span className='text-sm font-normal text-gray-800 hover:underline cursor-pointer'>Terms of services</span>
               <span className='text-sm font-normal text-gray-800 hover:underline cursor-pointer'>Privacy Policy</span>
               <span className='text-sm font-normal text-gray-800 hover:underline cursor-pointer'>Cookie Policy</span>
            </div>
            <div className="flex space-x-2 h-auto">
               <span className='text-sm font-normal text-gray-800 hover:underline cursor-pointer'>Ads Info</span>
               <span className='text-sm font-normal text-gray-800 hover:underline cursor-pointer'>More</span>
               <span className='text-sm font-normal text-gray-800'>?? 2021 Twitter, Inc.</span>
            </div>
         </div>
      </div>
   )
}

export default Widgets


