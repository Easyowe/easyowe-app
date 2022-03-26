import React from 'react'
import {
  Button,
  Group,
  Text,
  Grid,
  Title,
  useMantineColorScheme,
} from '@mantine/core'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  activity: any
}

export function ActivityCard(props: Props) {
  const { colorScheme } = useMantineColorScheme()

  return (
    <Group
      mt="xs"
      sx={(theme) => ({
        borderColor:
          colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[2],
        borderStyle: 'solid',
        borderRadius: 15,
      })}
      p={28}
    >
      <Grid
        justify="space-between"
        align="center"
        style={{
          width: '100%',
        }}
      >
        <Grid.Col span={4}>
          <Group spacing={52}>
            <Text weight={800} sx={{ fontSize: '1.5em' }}>
              ${props.activity.value}
            </Text>
            <Group direction="column" spacing={0}>
              <Text size="xs" weight={500}>
                {props.activity.date}
              </Text>
              <Title order={3} align="justify" sx={{ fontSize: '2em' }}>
                {props.activity.name}
              </Title>
            </Group>
          </Group>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button
            sx={(theme) => ({
              padding: '0 2em',
              backgroundColor: theme.colors.primary[5],
            })}
            variant="filled"
            radius={999}
            onClick={() => console.log('show some details')}
          >
            View
          </Button>
        </Grid.Col>
      </Grid>
    </Group>
  )
}
