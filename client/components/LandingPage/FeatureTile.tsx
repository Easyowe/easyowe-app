import { Card, Group, Text, Title } from '@mantine/core'
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
              fontSize: '1.45em',
              textTransform: 'uppercase',
              color: theme.colors.primary[5],
            })}
          >
            {props.title}
          </Text>
          <Title
            order={4}
            sx={(theme) => ({
              fontSize: '2em',
              color: theme.colors.dark[1],
            })}
          >
            {props.subtitle}
          </Title>
        </Group>
      </Card.Section>
      <Card.Section p={16}>
        <Text>{props.description}</Text>
      </Card.Section>
    </Card>
  )
}

export default FeatureTile
