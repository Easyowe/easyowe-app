import { Card, Group, Text } from '@mantine/core'
import React from 'react'

type Props = {
  title: string
  subtitle: string
  description: string
}

const FeatureTile = (props: Props) => {
  return (
    <Card
      withBorder
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[5],
        borderColor: theme.colors.dark[8],
        borderRadius: '0.75em',
        color: theme.colors.dark[1],
      })}
    >
      <Card.Section p={16}>
        <Group direction="column" spacing={0}>
          <Text
            size="xl"
            weight={800}
            sx={(theme) => ({
              fontSize: '2em',
              color: theme.colors.primary[5],
            })}
          >
            {props.title}
          </Text>
          <Text size="xl" weight={700}>
            {props.subtitle}
          </Text>
        </Group>
      </Card.Section>
      <Card.Section p={16}>
        <Text>{props.description}</Text>
      </Card.Section>
    </Card>
  )
}

export default FeatureTile
