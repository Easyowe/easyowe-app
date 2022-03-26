import { Center, Text } from '@mantine/core'
import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        background: '#313135',
        padding: '6em 0',
        color: '#fff',
      }}
    >
      <Center>
        <Text size="xl" weight={800}>
          2020 ©️ easyowe
        </Text>
      </Center>
    </footer>
  )
}

export default Footer
