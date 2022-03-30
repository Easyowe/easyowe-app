import { Box, Center, Group, Text, useMantineTheme } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const { colors } = useMantineTheme()
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        borderTop: `1px solid ${theme.colors.dark[8]}`,
        padding: '5em 5em',
        '@media (min-width: 1600px)': {
          padding: '5em 10em',
        },
        '@media (min-width: 1800px)': {
          padding: '5em 25em',
        },
        '@media (min-width: 2300px)': {
          padding: '5em 30em',
        },
        '@media (min-width: 2800px)': {
          padding: '5em 50em',
        },
        '@media (min-width: 3300px)': {
          padding: '5em 65em',
        },
        '@media (min-width: 3700px)': {
          padding: '5em 75em',
        },
        '@media (min-width: 4200px)': {
          padding: '5em 90em',
        },
        '@media (min-width: 4500px)': {
          padding: '5em 100em',
        },
        '@media (min-width: 4800px)': {
          padding: '5em 110em',
        },
        '@media (min-width: 5100px)': {
          padding: '5em 120em',
        },
        color: '#fff',
      })}
    >
      <Center>
        <Group sx={{ width: '100%' }} position="apart" px="5em">
          <Group direction="column">
            <Link href="/">
              <a>
                <Text size="xl" weight={500} color={colors.dark[2]}>
                  Home
                </Text>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <Text size="xl" weight={500} color={colors.dark[2]}>
                  About
                </Text>
              </a>
            </Link>
            <Text size="xl" weight={500} color={colors.dark[2]}>
              2020 ©️ easyowe
            </Text>
          </Group>
          <div style={{ position: 'relative', height: '8em', width: '8em' }}>
            <Image
              src={'/logo-transparent.svg'}
              alt="easyowe logo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </Group>
      </Center>
    </Box>
  )
}

export default Footer
