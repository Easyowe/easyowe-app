import { ActivityCard } from '@components/ActivityCard'
import React from 'react'
import { Box, Container, Group } from '@mantine/core'
import SearchBar from '@components/FriendsPage/SearchBar'
import Navbar from '@components/Navbar'

const index = () => {
  const activityLog = [
    {
      name: 'Jon Doe',
      date: 'NO RECORDED ACTIVITY',
      value: 24.31,
    },
    {
      name: 'Jon Doe',
      date: 'NO RECORDED ACTIVITY',
      value: 24.31,
    },
    {
      name: 'Jon Doe',
      date: 'NO RECORDED ACTIVITY',
      value: 24.31,
    },
    {
      name: 'Jon Doe',
      date: 'NO RECORDED ACTIVITY',
      value: 24.31,
    },
  ]

  // const renderActCard = () => (

  // )

  const fields = activityLog.map((activity, index) => (
    <ActivityCard key={index} activity={activity} />
  ))
  return (
    <>
      <Navbar />
      <Container px="xs">
        <Group>
          <SearchBar />
        </Group>

        <Box mx="auto">{fields}</Box>
      </Container>
    </>
  )
}

export default index
