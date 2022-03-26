import { Box, Group, useMantineColorScheme } from '@mantine/core';
import StatBox from './StatBox'
import React from 'react'




const Overview = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div className='overview_container'  >
      <span >
        <Group flex-grow='false' position='center'>
          <StatBox title='YOU OWE' stat='STAT' buttonText='View' />
          <StatBox title='YOU ARE OWED' stat='STAT' buttonText='View' />
          <StatBox title='INFORMATION' stat='STAT' buttonText='View' />
        </Group>
      </span>
      <Box sx={(theme) => ({
        margin: '30px auto auto auto', height: '200px', width: '75vw',
        borderStyle: 'solid', textAlign: 'center',
        borderColor: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[2]
      })}>
        Graph Placeholder</Box>
    </div>
  )
}

export default Overview
