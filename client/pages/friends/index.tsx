import React from 'react'
import {
  Button,
  Container,
  Grid,
  Group,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import SearchBar from '@components/FriendsPage/SearchBar'
import Navbar from '@components/Navbar'
import { useSession } from 'next-auth/react'
import { useUser } from 'hooks/useUser'
import { IFriend } from 'types/user'

const Friends = () => {
  const { data: session } = useSession()
  const { data: user } = useUser(session?.user?.id as string)
  const { colorScheme } = useMantineColorScheme()

  return (
    <>
      <Navbar />
      <Container size={'md'}>
        <Group>
          <SearchBar />
        </Group>

        <Group direction="column" sx={{ width: '100%' }} align="center">
          {user?.friends?.map((friend: IFriend) => (
            <Group
              key={friend.username}
              mt="xs"
              sx={(theme) => ({
                borderColor:
                  colorScheme === 'dark'
                    ? theme.colors.dark[8]
                    : theme.colors.dark[2],
                borderStyle: 'solid',
                borderRadius: 15,
                width: '100%',
              })}
              p={28}
            >
              <Grid
                justify="space-between"
                align="center"
                style={{
                  width: '100%',
                }}
              >
                <Grid.Col span={6}>
                  <Group spacing={52}>
                    <Text weight={800} sx={{ fontSize: '1.5em' }}>
                      {friend.username}
                    </Text>
                  </Group>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Button
                    sx={(theme) => ({
                      padding: '0 2em',
                      backgroundColor: theme.colors.primary[5],
                    })}
                    variant="filled"
                    radius={999}
                  >
                    View
                  </Button>
                </Grid.Col>
              </Grid>
            </Group>
          ))}
        </Group>
      </Container>
    </>
  )
}

export default Friends
