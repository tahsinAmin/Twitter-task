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

