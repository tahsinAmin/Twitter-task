import Head from 'next/head'
import Header from '../components/Header'
import Content from '../components/Content'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>


      {/* Content - Middle*/}
      <Content/>

      {/* Footer - Bottom */}
      <Navbar/>
    </div>
  )
}
