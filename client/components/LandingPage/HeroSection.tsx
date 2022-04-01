import React from 'react'
import {
  Button,
  Group,
  Text,
  Title,
  MediaQuery,
  SimpleGrid,
} from '@mantine/core'
import { signIn } from 'next-auth/react'
import { useMediaQuery } from '@mantine/hooks'
import Image from 'next/image'

export function HeroSection() {
  const isSmall = useMediaQuery('(max-width: 755px)')
  const isMedium = useMediaQuery('(min-width: 756px) and (max-width: 1023px)')
  const isXLarge = useMediaQuery('(min-width: 1200px)')

  return (
    <Group
      sx={{
        height: `${isXLarge ? '50vh' : '45vh'}`,
        overflow: 'hidden',
      }}
    >
      <SimpleGrid cols={!isXLarge ? 1 : 2}>
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
            sx={{ alignSelf: 'flex-start' }}
            position={`${isMedium || isSmall ? 'center' : 'left'}`}
          >
            <Title
              order={1}
              sx={() => ({
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
                align={`${isMedium || isSmall ? 'center' : 'left'}`}
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
            minWidth: '100%',
            height: '100vh',
            flex: 1,
            display: isXLarge ? 'flex' : 'none',
            alignSelf: 'flex-end',
            transform: 'translateY(5%)',
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
      </SimpleGrid>
    </Group>
  )
}
