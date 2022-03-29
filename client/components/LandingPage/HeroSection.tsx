import React from 'react'
import {
  Box,
  Button,
  Group,
  Text,
  Title,
  useMantineTheme,
  MediaQuery,
} from '@mantine/core'
import { signIn } from 'next-auth/react'

export function HeroSection() {
  const { breakpoints } = useMantineTheme()
  return (
    <Box sx={{ height: '65vh', overflow: 'hidden' }}>
      <Group>
        <Group
          direction="column"
          position={'center'}
          sx={{
            width: '60%',
          }}
        >
          <Title
            order={1}
            sx={(theme) => ({
              fontSize: '3em',
              lineHeight: '1',
            })}
          >
            Eliminate arguments and maintain relationships with help of{' '}
            <span
              style={{
                color: '#5E4AE3',
              }}
            >
              Easyowe
            </span>
            .
          </Title>
          <Group
            sx={{
              width: '60%',
            }}
          >
            <Text
              sx={(theme) => ({
                color: theme.colors.dark[4],
              })}
              size="xl"
            >
              Easy way to manage & keep track of owing friends and friends who
              owe you.
            </Text>
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
                sx={(theme) => ({
                  color: theme.colors.dark[1],
                  '&:hover': {
                    color: theme.colors.dark[0],
                    backgroundColor: 'transparent',
                  },
                })}
              >
                Learn More
              </Button>
            </Group>
          </Group>
        </Group>
        <MediaQuery
          query={`(min-width: 0px) and (max-width: 1100px)`}
          styles={{ display: 'none' }}
        >
          <Box
            sx={(theme) => ({
              background: theme.colors.dark[8],
              width: '24em',
              height: '42em',
              borderRadius: '2em',
              transform: 'skew(-6deg)',
            })}
          ></Box>
        </MediaQuery>
      </Group>
    </Box>
  )
}
