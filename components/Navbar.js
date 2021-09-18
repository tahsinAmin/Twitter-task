import { FiMail,FiBell, FiSearch, FiHome } from "react-icons/fi";
function Navbar() {
   return (
      // <div className="navbar ">
         <div className="navbar sticky bottom-0 z-10 flex flex-col space-y-4 sm:hidden"> {/* class: sm:hidden*/}
            <div className="rounded-full relative h-16 w-16 inset-x-3/4 bg-blue-400 "></div>
               <div className=' flex justify-between h-12 p-2 items-center bg-white '>
                  <div className="navbar-icon"><FiHome size='2em'/></div>
                  <div className="navbar-icon"><FiSearch size='2em'/></div>
                  <div className="navbar-icon"><FiBell size='2em'/></div>
                  <div className="navbar-icon"><FiMail size='2em'/></div>
               </div>
         </div>
      // </div>
   )
}

export default Navbar

// git remote add origin https://github.com/tahsinAmin/Twitter-task.git
// git push -u origin main