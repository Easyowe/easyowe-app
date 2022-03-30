import { HeroSection } from './HeroSection'
import React from 'react'
import { Box } from '@mantine/core'
import FeatureSection from './FeatureSection'
import Footer from './Footer'
import Navbar from '@components/LandingPage/Navbar'
import { useMediaQuery } from '@mantine/hooks'

// type Props = {}

const Home = () => {
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
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
          padding: isWideScreen
            ? '16em 72em'
            : isWideScreenXL
            ? '24em 82em'
            : '5em',
          '@media (max-width: 755px)': {
            padding: '5em 0.5em',
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
