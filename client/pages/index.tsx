import type { NextPage } from 'next'
import LandingPage from '@components/LandingPage'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Dashboard from './dashboard'
import { useEffect } from 'react'
import { useState } from 'react'

const Home: NextPage = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [session])

  if (!session) return <LandingPage />;
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
      <Dashboard /> 
      {/* {session ? : } */}
    </>
  )
}

export default Home
