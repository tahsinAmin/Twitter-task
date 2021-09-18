import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Middle from '../components/Middle'
import Widgets from '../components/Widgets'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-between md:block "> {/** overflow hidden not working for xl*/}
      <Head>
        <title>Home / Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center">
        <Sidebar/>

        <Middle/> 

        <Widgets/>
      </main>
      <Navbar/>
    </div>
  )
}





// ___________BONUS_____________________
// Click Home to scroll to the top
// Sidebar showing active state
// in md, when the height is small, the sidebar icons all don't show up, need to adjust ot with the height.
// Widgets show more will extend the divs (Hints: Scrollbar hide)
// Header home text will be cursor pointer which will reload the page.
// Put the HEader Component outisde if I get time.
//  Search input wil be out of widget as it stays it's place when scrolling.


// ______________PROBLEM_____________________
// At 640x699, both the sidebar and the navbar shows up

