import React from 'react'
import { Box, Button, Group, Text, Title } from '@mantine/core'
import { signIn } from 'next-auth/react'

export function HeroSection() {
  return (
    <Box sx={{ minHeight: '65vh' }}>
      <Group
        direction="column"
        sx={{
          width: '60%',
        }}
      >
        <Title
          order={1}
          sx={{
            fontSize: '4em',
            lineHeight: '1',
          }}
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
            Easy way to manage & keep track of owing friends and friends who owe
            you.
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
              Log In
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
    </Box>
  )
}
