import Header from '../components/Header'
import Feed from '../components/Feed'

function Middle() {
   return (
      <div className='w-full border h-screen overflow-y-auto scrollbar-hide'>
         <Header/>
         <Feed/>
      </div>
   )
}

export default Middle
