import {
  Box,
  Button,
  Group,
  Text,
  useMantineTheme,
  Burger,
  Center,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type NavbarProps = {
  open: boolean
}

const MobileMenu = ({ open }: NavbarProps) => {
  return (
    <Group
      sx={{
        position: 'absolute',
        backgroundImage: `linear-gradient(to top right, rgba(26, 26, 28, 0.75), #3532367e)`,
        backdropFilter: 'blur(4px)',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        transform: open ? 'translateX(0%)' : 'translateX(100%)',
        transition: 'all 500ms ease',
        zIndex: 20,
      }}
    >
      <Center sx={{ width: '100%' }}>
        <Group direction="column">
          <Link href="/">
            <a style={{ fontSize: '1.75em', fontWeight: 'bold' }}>Home</a>
          </Link>
          <Link href="/about">
            <a style={{ fontSize: '1.75em', fontWeight: 'bold' }}>About</a>
          </Link>
        </Group>
      </Center>
    </Group>
  )
}

const Navbar = () => {
  const { colors } = useMantineTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false)

  const openMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const isSmall = useMediaQuery('(max-width: 676px)')
  return (
    <>
      <MobileMenu open={mobileMenuOpen} />
      <Group
        sx={(theme) => ({
          borderBottom: `1px solid ${theme.colors.dark[8]}`,
          padding: '1em 2em',
          width: '100%',
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 30,
          backgroundImage: `linear-gradient(to top right, rgba(26, 26, 28, 0.50), #3532367e)`,
          backdropFilter: 'blur(4px)',
        })}
        position="apart"
      >
        <Box sx={{ position: 'relative', width: '4em', height: '4em' }}>
          <Image
            layout="fill"
            src={'/logo-transparent.svg'}
            alt="easyowe logo"
          />
        </Box>
        <Group spacing={72} sx={{ zIndex: 30 }}>
          {isSmall ? (
            <Burger opened={mobileMenuOpen} onClick={openMobileMenu} />
          ) : (
            <>
              <Group>
                <Link href="/">
                  <a>
                    <Text size="md" weight={500} color={colors.dark[1]}>
                      Home
                    </Text>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Text size="md" weight={500} color={colors.dark[1]}>
                      About
                    </Text>
                  </a>
                </Link>
              </Group>
              <Group>
                <Button
                  size="md"
                  onClick={() => signIn()}
                  sx={(theme) => ({
                    backgroundColor: theme.colors.primary[5],
                    width: 'fit-content',
                    '&:hover': {
                      backgroundColor: theme.colors.primary[4],
                    },
                  })}
                >
                  Sign Up
                </Button>
                <Button
                  size="md"
                  variant="subtle"
                  onClick={() => signIn()}
                  sx={(theme) => ({
                    width: 'fit-content',
                    color: theme.colors.dark[1],
                  })}
                >
                  Log In
                </Button>
              </Group>
            </>
          )}
        </Group>
      </Group>
    </>
  )
}

export default Navbar
