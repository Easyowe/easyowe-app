import { HeroSection } from './HeroSection'
import React from 'react'
import { Box } from '@mantine/core'
import FeatureSection from './FeatureSection'
import Footer from './Footer'
import Navbar from '@components/LandingPage/Navbar'

// type Props = {}

const index = () => {
  return (
    <>
      <Navbar />
      <Box
        p={72}
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[5],
          color: theme.colors.dark[0],
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
        })}
      >
        <HeroSection />
        <FeatureSection />
      </Box>
      <Footer />
    </>
  )
}

export default index
