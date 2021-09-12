import Head from 'next/head'
import Header from '../components/Header'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="box-content h-screen w-screen flex flex-col justify-between md:block">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:inline-flex w-screen">
        <Sidebar/>
        {/* <div className='md:inline overflow-y-scroll md:w-11/12'> */}
        <div className='w-full md:w-11/12 border h-screen overflow-y-scroll'>
          <Header/>
          <Content/>
        </div>
      </div>
      <Navbar/>
    </div>
  )
}