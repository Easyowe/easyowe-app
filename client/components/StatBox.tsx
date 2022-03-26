import React from 'react'
import { Box, Button, Text, Title, useMantineColorScheme } from '@mantine/core'

type Props = {
  title?: React.ReactNode
  stat?: string
  buttonText?: string
}

const StatBox = (props: Props) => {
  const { colorScheme } = useMantineColorScheme()
  // const dark = colorScheme === 'dark';

  return (
    <Box
      sx={(theme) => ({
        display: 'block',
        flex: 1,
        textAlign: 'left',
        height: 'auto',
        borderStyle: 'solid',
        borderRadius: '0.75em',
        borderColor:
          colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[2],
        padding: '1em',
      })}
    >
      <Text
        size="xl"
        weight={700}
        sx={(theme) => ({ color: theme.colors.dark[6] })}
      >
        {props.title}
      </Text>
      <Title order={1} sx={{ fontSize: '3em' }}>
        {' '}
        {props.stat}
      </Title>
      <Button
        style={{ marginTop: '20px', width: '70px', backgroundColor: '#5E4AE3' }}
        variant="filled"
        onClick={() => console.log('show some stat')}
      >
        {props.buttonText}
      </Button>
    </Box>
  )
}

export default StatBox
