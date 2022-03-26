import React from 'react'
import { Box, Button, Text, Title, useMantineColorScheme } from '@mantine/core'

type Props = {
  title?: React.ReactNode;
  stat?: string;
  buttonText?: string;
}



const StatBox = (props: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Box
      sx={(theme) => ({
        display: 'block',
        textAlign: 'left',
        width: '200px',
        height: 'auto',
        borderStyle: 'solid',
        borderRadius: '10px',
        borderColor: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[2],
        margin: '0px 30px 0px 30px',
        padding: '8px 20px 16px 14px',
      })}>

      <Text size='sm' weight={700} color={'dimmed'} >{props.title}</Text>
      <Title order={1}> {props.stat}</Title>
      <Button
        style={{ marginTop: '20px', width: '70px', backgroundColor: '#5E4AE3' }}
        variant='filled'
        onClick={() => console.log('show some stat')}
      >
        {props.buttonText}
      </Button>
    </Box>
  )
}


export default StatBox