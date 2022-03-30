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
import { useMediaQuery } from '@mantine/hooks'
import Image from 'next/image'

export function HeroSection() {
  const isSmall = useMediaQuery('(max-width: 755px)')
  const isMedium = useMediaQuery('(min-width: 756px) and (max-width: 1023px)')
  const isXLarge = useMediaQuery('(max-width: 1200px)')

  return (
    <Box
      sx={{
        height: `${isXLarge ? '65vh' : '45vh'}`,
        overflow: 'hidden',
        display: 'flex',
      }}
    >
      <Group>
        <MediaQuery
          smallerThan={'md'}
          styles={{
            textAlign: 'center',
            width: '100%',
            padding: 0,
          }}
        >
          <Group
            direction="column"
            sx={{ flex: 1, alignSelf: 'flex-start' }}
            position={`${isMedium || isSmall ? 'center' : 'left'}`}
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
                textAlign: 'left',
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
              <MediaQuery
                smallerThan={'md'}
                styles={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
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
              </MediaQuery>
            </Group>
          </Group>
        </MediaQuery>
        <MediaQuery
          query={`(min-width: 0px) and (max-width: 1400px)`}
          styles={{ display: 'none' }}
        >
          {/* <Box
            sx={(theme) => ({
              background: theme.colors.dark[8],
              height: '42em',
              borderRadius: '2em',
              transform: 'skew(-6deg)',
              flex: '1',
            })}
          ></Box> */}
          <Group
            sx={{
              position: 'relative',
              maxWidth: '100%',
              height: '100vh',
              flex: '1',
              display: 'flex',
              alignSelf: 'flex-end',
            }}
          >
            <Image
              src="/easyowe-iphone-mock.svg"
              alt="iphone mock up"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Group>
        </MediaQuery>
      </Group>
    </Box>
  )
}
