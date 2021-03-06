function SidebarRow({ src, Icon, title }) {
   return (
      <div className='flex cursor-pointer items-center space-x-4 hover:bg-gray-200 rounded-full px-4 py-2 transition duration-700 ease-out'>
            <Icon className='h-7 w-7 text-gray-800'/>
            <p className="hidden xl:inline-flex text-xl font-normal">{title}</p>
      </div>
   )
}

export default SidebarRow
