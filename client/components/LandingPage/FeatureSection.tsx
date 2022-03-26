import React from 'react'
import { Box, Group, SimpleGrid, Text, Title } from '@mantine/core'
import FeatureTile from './FeatureTile'

const FeatureSection = () => {
  return (
    <Box>
      <Group
        sx={{ width: '100%', textAlign: 'center' }}
        position="center"
        direction="column"
      >
        <Title order={2} sx={{ fontSize: '3em', width: '32ch' }}>
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
          sx={(theme) => ({ width: '52ch', color: theme.colors.dark[4] })}
          size="xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </Text>
      </Group>
      <Group direction="row" position="apart" sx={{ position: 'relative' }}>
        <SimpleGrid cols={2} sx={{ order: 2, width: '65%' }} my={52}>
          <FeatureTile
            title="P2P"
            subtitle="Groups"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
          />
          <FeatureTile
            title="P2P"
            subtitle="Groups"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
          />
          <FeatureTile
            title="P2P"
            subtitle="Groups"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
          />
          <FeatureTile
            title="P2P"
            subtitle="Groups"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
          />
        </SimpleGrid>
        <Box
          sx={(theme) => ({
            background: theme.colors.dark[7],
            width: '24em',
            height: '42em',
            borderRadius: '2em',
            transform: 'skew(-6deg)',
          })}
        ></Box>
      </Group>
      <Group my={72}>
        <Title order={3} sx={{ fontSize: '3.5em' }}>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Text>
          <Text size="xl" sx={{ flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Text>
        </Group>
      </Group>
    </Box>
  )
}

export default FeatureSection
