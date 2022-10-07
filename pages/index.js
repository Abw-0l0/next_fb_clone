import { getSession } from 'next-auth/react'
// import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import Feed from '../components/Feed'
import InputBox from '../components/InputBox'
import Widgets from '../components/Widgets'

export default function Home({ session }) {
  // console.log(session);
  // if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>fb-clone</title>
      </Head>

      <Header/>

      <main className='flex bg-gray-100'>
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </main>

    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}