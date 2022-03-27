import { Group, Menu, Text, useMantineTheme } from '@mantine/core'
import { useSession, signOut } from 'next-auth/react'
import React from 'react'
import { Plus, Friends, ArrowsLeftRight } from 'tabler-icons-react'
// import { useModals } from '@mantine/modals'

// type Props = {}

const Navbar = () => {
  //   const modals = useModals()

  const { data: session } = useSession()
  const { colors } = useMantineTheme()

  //   const splitModal = modals.openContextModal('createSplitModal', {
  //     title: 'Create Split',
  //     innerProps: {

  //     }
  //   })

  return (
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
      </Group>
    </Group>
  )
}

export default Navbar
