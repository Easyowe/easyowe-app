import React from 'react'
import { Box, Group, SimpleGrid, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import FeatureTile from './FeatureTile'
import Image from 'next/image'

const FeatureSection = () => {
  const isSmall = useMediaQuery('(max-width: 755px)')
  const isMedium = useMediaQuery('(min-width: 756px) and (max-width: 1023px)')
  const isLarge = useMediaQuery('(min-width: 1200px)')
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
      <SimpleGrid
        cols={!isLarge ? 1 : 2}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: '50vh',
          marginTop: '5em',
        }}
      >
        <SimpleGrid
          cols={isSmall ? 1 : 2}
          sx={{
            order: 2,
            width: `${isSmall || isMedium || !isLarge ? '100%' : '65%'}`,
            alignContent: `${!isLarge ? 'center' : 'flex-start'}`,
          }}
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
          sx={{
            position: 'relative',
            maxWidth: '100%',
            height: '100vh',
            display: `${isLarge ? 'flex' : 'none'}`,
            alignSelf: 'end',
            transform: 'translateY(-50%)',
          }}
        >
          <Image
            src={'/easyowe-iphone-adding-mock.svg'}
            alt="easy adding splits with friends"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </SimpleGrid>
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
