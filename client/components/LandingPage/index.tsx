import { HeroSection } from './HeroSection'
import React from 'react'
import { Box } from '@mantine/core'
import FeatureSection from './FeatureSection'
import Footer from './Footer'
import Navbar from '@components/LandingPage/Navbar'
import { useMediaQuery } from '@mantine/hooks'

// type Props = {}

const Home = () => {
  const isXLarge = useMediaQuery('(min-width: 2100px)')
  const isWideScreen = useMediaQuery('(min-width: 3400px)')
  const isWideScreenXL = useMediaQuery('(min-width: 4500px)')

  return (
    <>
      <Navbar />
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[5],
          color: theme.colors.dark[0],
          minHeight: '100vh',
          gap: '6em',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
          padding: '15em 5em',
          '@media (min-width: 1600px)': {
            padding: '15em 10em',
          },
          '@media (min-width: 1800px)': {
            padding: '15em 25em',
          },
          '@media (min-width: 2300px)': {
            padding: '15em 30em',
          },
          '@media (min-width: 2800px)': {
            padding: '15em 50em',
          },
          '@media (min-width: 3300px)': {
            padding: '15em 65em',
          },
          '@media (min-width: 3700px)': {
            padding: '15em 75em',
          },
          '@media (min-width: 4200px)': {
            padding: '15em 90em',
          },
          '@media (min-width: 4500px)': {
            padding: '15em 100em',
          },
          '@media (min-width: 4800px)': {
            padding: '15em 110em',
          },
          '@media (min-width: 5100px)': {
            padding: '15em 120em',
          },
        })}
      >
        <HeroSection />
        <FeatureSection />
      </Box>
      <Footer />
    </>
  )
}

export default Home
