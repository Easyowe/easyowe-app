import React from 'react'
import { Box, Group, MediaQuery, SimpleGrid, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import FeatureTile from './FeatureTile'

const FeatureSection = () => {
  const isSmall = useMediaQuery('(max-width: 755px)')
  const isMedium = useMediaQuery('(min-width: 756px) and (max-width: 1023px)')
  const isLarge = useMediaQuery('(min-width: 1300px)')
  return (
    <Box>
      <Group
        sx={{ width: '100%', textAlign: 'center' }}
        position="center"
        direction="column"
      >
        <Title
          order={2}
          sx={{
            fontSize: `${isSmall ? '2em' : '3em'}`,
            width: `${isSmall || isMedium ? '100%' : '32ch'}`,
          }}
        >
          Earn a reputation with{' '}
          <span
            style={{
              color: '#5E4AE3',
            }}
          >
            Easyowe Score
          </span>{' '}
          to keep track of reliability amongst friends
        </Title>
        <Text
          sx={(theme) => ({
            width: `${isSmall || isMedium ? '100%' : '50%'}`,
            color: theme.colors.dark[4],
          })}
          size={`${isSmall ? 'md' : 'xl'}`}
        >
          With Easyowe you don’t have to worry about that struggle, this app is
          an easy way to manage and keep track of what you owe the friend that
          paid for you, or which friends owe you and how much.
        </Text>
      </Group>
      <Group
        direction="row"
        position={`${isLarge ? 'apart' : 'center'}`}
        sx={{ position: 'relative' }}
      >
        <SimpleGrid
          cols={isSmall ? 1 : 2}
          sx={{ order: 2, width: `${isSmall || isMedium ? '100%' : '65%'}` }}
          my={52}
        >
          <FeatureTile
            title="P2P"
            subtitle="Groups"
            description="Have as many groups to properly control your debts as you want."
          />
          <FeatureTile
            title="Calculated"
            subtitle="Efficiency"
            description="Easily calculate your debts and get the best possible result."
          />
          <FeatureTile
            title="Visual Guide"
            subtitle="Charts"
            description="See how your debts are distributed and how you are doing, on a time based scale."
          />
          <FeatureTile
            title="Balance Tracking"
            subtitle="Wallet"
            description="Keep track of your wallet balance and see how much you have left to pay."
          />
        </SimpleGrid>
        <Box
          sx={(theme) => ({
            display: `${isLarge ? 'flex' : 'none'}`,
            background: theme.colors.dark[8],
            width: '24em',
            height: '42em',
            borderRadius: '2em',
            transform: 'skew(6deg)',
          })}
        ></Box>
      </Group>
      <Group my={72}>
        <Title order={3} sx={{ fontSize: '3.5em', lineHeight: 1 }}>
          Add a record{' '}
          <span
            style={{
              color: '#B5FFE1',
            }}
          >
            once
          </span>{' '}
          and let Easyowe update automatically and{' '}
          <span
            style={{
              color: '#DA4167',
            }}
          >
            remove{' '}
          </span>
          human error
        </Title>
        <Group direction="row">
          <Text size="xl" sx={{ flex: 1 }}>
            Easyowe is a tool that helps you to keep track of your debts and how
            much you owe.
          </Text>
          <Text size="xl" sx={{ flex: 1 }}>
            You can add a record once and Easyowe will update automatically and
            remove human error.
          </Text>
        </Group>
      </Group>
    </Box>
  )
}

export default FeatureSection
