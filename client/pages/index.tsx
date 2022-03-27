import type { NextPage } from 'next'
import LandingPage from '@components/LandingPage'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Dashboard from './dashboard'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Easyowe</title>
        <meta
          name="description"
          content="Easy way to manage & keep track of owing friends and friends who owe you."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      {session ? <Dashboard /> : <LandingPage />}
    </>
  )
}

export default Home
