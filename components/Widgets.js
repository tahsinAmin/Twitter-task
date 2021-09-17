import {
   SearchIcon,
   CogIcon
 } from "@heroicons/react/outline";
 import {  DotsHorizontalIcon } from '@heroicons/react/solid'
 
 function Widgets() {
   return (
      <div className='hidden lg:flex flex-col py-2 px-7 space-y-2 max-w-[800px] xl:min-w-[400px]'>
         <div className="md:inline-flex items-center rounded-full p-2 border-2">
            <SearchIcon className="h-6 text-gray-600" />
            <input
               className="lg:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500  flex-shrink"
               placeholder="Search Twitter"
            />
         </div>
         
         {/* Trendings */}
         <div className="flex-col rounded-2xl bg-gray-100">
            <div className='flex justify-between items-center px-4 py-2'>
               <h4 className='text-xl font-bold'>Trends For You</h4>
               <CogIcon className='h-6 w-6'/>
            </div>
            <div className='flex-col hover:bg-gray-200 py-4 px-4 space-y-1 cursor-pointer'>
               <div className='flex justify-between text-gray-500'>
                  <p className='text-xs font-semibold'>Trending in Bangladesh</p>
                  <DotsHorizontalIcon className='h-4 w-4'/>
               </div>
               <h4 className='text-sm font-semibold'>#AurraBhatnagarBadoni</h4>
               <p className='text-xs font-semibold text-gray-500'>19.2K Tweets</p>
            </div>

            <div className='flex-col hover:bg-gray-200 px-4 py-4 space-y-1 cursor-pointer'>
               <div className='flex justify-between text-gray-500'>
                  <p className='text-xs font-semibold'>Trending in Bangladesh</p>
                  <DotsHorizontalIcon className='h-4 w-4'/>
               </div>
               <h4 className='text-sm font-semibold'>#AurraBhatnagarBadoni</h4>
               <p className='text-xs font-semibold text-gray-500'>19.2K Tweets</p>
            </div>

            <p className='text-sm text-blue-500 hover:underline px-4 py-4 cursor-pointer'>Show more</p>
         </div>
      </div>
   )
}

export default Widgets
