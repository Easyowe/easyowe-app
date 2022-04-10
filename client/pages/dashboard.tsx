import ActivityLog from '@components/ActivityLog'
import Forms from '@components/Forms'
import Navbar from '@components/Navbar'
import Overview from '@components/Overview'
import ThemeButton from '@components/ThemeButton'
import { Center, Container, Group, Title, useMantineTheme } from '@mantine/core'
import { NextPage } from 'next'
import React from 'react'
import { Rocket } from 'tabler-icons-react'

const Dashboard: NextPage = () => {
  const { colors } = useMantineTheme()
  return (
    <>
      <Navbar />
      {process.env.NEXT_PUBLIC_ENVIRONMENT !== 'development' ? (
        <Container size="xl" py={52}>
          <Overview />
          <Forms />
          <ActivityLog />
          <ThemeButton />
        </Container>
      ) : (
        <Container size="xl" py={52}>
          <Center sx={{ height: '75vh' }}>
            <Group direction="column" align={'center'}>
              <Title
                order={1}
                sx={{
                  fontSize: '3em',
                  margin: '-1em',
                  zIndex: '10',
                  textTransform: 'uppercase',
                  color: colors.dark[2],
                }}
              >
                Coming Soon
              </Title>
              <Rocket size={102} color={colors.dark[6]} />
            </Group>
          </Center>
        </Container>
      )}
    </>
  )
}

export default Dashboard
