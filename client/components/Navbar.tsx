<<<<<<< HEAD
<<<<<<< HEAD
import { CreateSplitModal } from './modals/CreateSplitModal'
=======
>>>>>>> 14963bb (WIP: started with create split modal)
=======
import { CreateSplitModal } from './modals/CreateSplitModal'
>>>>>>> 7bd1891 (WIP: mock api and create split modal)
import { Group, Menu, Text, useMantineTheme } from '@mantine/core'
import { useSession, signOut } from 'next-auth/react'
import React from 'react'
import { Plus, Friends, ArrowsLeftRight } from 'tabler-icons-react'
<<<<<<< HEAD
<<<<<<< HEAD
=======
// import { useModals } from '@mantine/modals'
>>>>>>> 14963bb (WIP: started with create split modal)
=======
>>>>>>> 7bd1891 (WIP: mock api and create split modal)

// type Props = {}

const Navbar = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [opened, setOpened] = React.useState(false)

  const { data: session } = useSession()
  const { colors } = useMantineTheme()

  return (
    <>
      <CreateSplitModal opened={opened} setOpened={setOpened} />
      <Group
        direction="row"
        position={'apart'}
        p={16}
        px={196}
        sx={(theme) => ({
          borderBottomColor: theme.colors.dark[8],
          borderBottomWidth: '2px',
          borderBottomStyle: 'solid',
          width: '100%',
        })}
      >
        <Group>
          {session?.user?.name}
          <Menu>
            <Menu.Label>Account</Menu.Label>
            <Menu.Item
              onClick={() => signOut()}
              sx={{ background: colors.dark[5] }}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Group>
        <Group>
          <Menu
            control={
              <Group sx={{ cursor: 'pointer', userSelect: 'none' }} spacing={2}>
                <Plus color={colors.dark[1]} size={18} />
                <Text size="md">Create</Text>
              </Group>
            }
          >
            <Menu.Label>Create</Menu.Label>
            <Menu.Item
              onClick={() => setOpened(true)}
              sx={{ background: colors.dark[5] }}
              icon={<ArrowsLeftRight color={colors.dark[1]} size={18} />}
            >
              Create
            </Menu.Item>
          </Menu>
          <Group sx={{ cursor: 'pointer', userSelect: 'none' }} spacing={2}>
            <Friends color={colors.dark[1]} size={18} />
            <Text>Friends</Text>
          </Group>
=======
  //   const modals = useModals()
=======
  const [opened, setOpened] = React.useState(false)
>>>>>>> 7bd1891 (WIP: mock api and create split modal)

  const { data: session } = useSession()
  const { colors } = useMantineTheme()

  return (
    <>
      <CreateSplitModal opened={opened} setOpened={setOpened} />
      <Group
        direction="row"
        position={'apart'}
        p={16}
        px={196}
        sx={(theme) => ({
          borderBottomColor: theme.colors.dark[8],
          borderBottomWidth: '2px',
          borderBottomStyle: 'solid',
          width: '100%',
        })}
      >
        <Group>
          {session?.user?.name}
          <Menu>
            <Menu.Label>Account</Menu.Label>
            <Menu.Item
              onClick={() => signOut()}
              sx={{ background: colors.dark[5] }}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Group>
        <Group>
          <Menu
            control={
              <Group sx={{ cursor: 'pointer', userSelect: 'none' }} spacing={2}>
                <Plus color={colors.dark[1]} size={18} />
                <Text size="md">Create</Text>
              </Group>
            }
          >
<<<<<<< HEAD
            Create
          </Menu.Item>
        </Menu>
        <Group sx={{ cursor: 'pointer', userSelect: 'none' }} spacing={2}>
          <Friends color={colors.dark[1]} size={18} />
          <Text>Friends</Text>
>>>>>>> 14963bb (WIP: started with create split modal)
=======
            <Menu.Label>Create</Menu.Label>
            <Menu.Item
              onClick={() => setOpened(true)}
              sx={{ background: colors.dark[5] }}
              icon={<ArrowsLeftRight color={colors.dark[1]} size={18} />}
            >
              Create
            </Menu.Item>
          </Menu>
          <Group sx={{ cursor: 'pointer', userSelect: 'none' }} spacing={2}>
            <Friends color={colors.dark[1]} size={18} />
            <Text>Friends</Text>
          </Group>
>>>>>>> 7bd1891 (WIP: mock api and create split modal)
        </Group>
      </Group>
    </>
  )
}

export default Navbar
