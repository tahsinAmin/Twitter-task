import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import Middle from '../components/Middle'

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between md:block overflow-hidden"> {/** overflow hidden not working for xl*/}
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center">
        {/* Left */}
        <Sidebar/>

        {/* Middle */}
        <Middle/>

        {/* Right */}
        <Widgets/>
      </main>
      <Navbar/>
    </div>
  )
}

// Need to work on Sidebar paddings

// in md, when the height is small, the sidebar icons all don't show up, need to adjust ot with the height.
//  Also in md, the header comes a bit down. Don't know, I can see behind when scroll.
//  HOw to make it responsive in height as well? Like hiding a few sidebar icons
// Textarea should noy show the the responsive size, it shoiuld be hidden
// put that twitter icon away from the grouo.
// Tweet button not showing in Sidebar when we're in xl
// Put the HEader Component outisde if I get time.