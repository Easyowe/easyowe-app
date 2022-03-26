import { Group, Menu } from '@mantine/core'
import { useSession, signOut } from 'next-auth/react'
import React from 'react'

// type Props = {}

const Navbar = () => {
  const { data: session } = useSession()

  return (
    <Group
      sx={(theme) => ({
        borderBottomColor: theme.colors.dark[8],
        borderBottomWidth: '2px',
        borderBottomStyle: 'solid',
        padding: '1em',
      })}
    >
      <Group>
        {session?.user?.name}
        <Menu>
          <Menu.Label>Account</Menu.Label>
          <Menu.Item onClick={() => signOut()}>Logout</Menu.Item>
        </Menu>
      </Group>
    </Group>
  )
}

export default Navbar
