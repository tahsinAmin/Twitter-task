import Posts from './Posts';
import InputBox from "./InputBox";

function Feed() {
   return (
      <div className="w-full ">
         {/* inputBox */}
         <InputBox/>
         
         
         <Posts/>
         {/* Posts */}
         
      </div>
   )
}

export default Feed