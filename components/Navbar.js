import { FiMail,FiBell, FiSearch, FiHome } from "react-icons/fi";
function Navbar() {
   return (
      <div className="sticky bottom-0 z-10 flex flex-col space-y-4 md:hidden">
         <div className="rounded-full relative h-16 w-16 inset-x-3/4 bg-blue-400 "></div>
         <div className='flex justify-between h-12 p-2 bg-white '>
            <div className="q"><FiHome size='2em'/></div>
            <div className="q"><FiSearch size='2em'/></div>
            <div className="q"><FiBell size='2em'/></div>
            <div className="q"><FiMail size='2em'/></div>
         </div>
      </div>
   )
}

export default Navbar

// git remote add origin https://github.com/tahsinAmin/Twitter-task.git
// git push -u origin main