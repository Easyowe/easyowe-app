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
        padding: '6em 0',
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
