import { FiMail,FiBell, FiSearch, FiHome } from "react-icons/fi";
function Navbar() {
   return (
      <div className='sticky bottom-0 z-10 flex justify-between h-12 p-2 bg-white md:hidden'>
         <div className="q"><FiHome size='2em'/></div>
         <div className="q"><FiSearch size='2em'/></div>
         <div className="q"><FiBell size='2em'/></div>
         <div className="q"><FiMail size='2em'/></div>
      </div>
   )
}

export default Navbar
