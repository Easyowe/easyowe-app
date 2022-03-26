import ActivityLog from '@components/ActivityLog'
import Forms from '@components/Forms'
import Navbar from '@components/Navbar'
import Overview from '@components/Overview'
import ThemeButton from '@components/ThemeButton'
import { Container } from '@mantine/core'
import { NextPage } from 'next'
import React from 'react'

const Dashboard: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container size="xl" py={52}>
        <Overview />
        <Forms />
        <ActivityLog />
        <ThemeButton />
      </Container>
    </>
  )
}

export default Dashboard
