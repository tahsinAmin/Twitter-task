import Image from "next/image"

function SidebarRow({ src, Icon, title }) {
   return (
      <div className='flex cursor-pointer items-center space-x-2 hover:bg-gray-200 rounded-full px-4 py-2'>
            { Icon && <Icon className='h-8 w-8 text-gray-800'/> }
            <p className="hidden xl:inline-flex font-medium">{title}</p>
      </div>
   )
}

export default SidebarRow
