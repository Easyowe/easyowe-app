import { NativeSelect, TextInput, useMantineColorScheme } from '@mantine/core'
import React, { useState } from 'react'

// type Props = {}

const Forms = () => {
  const [text, setText] = useState('')
  console.log(text)
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  return (
    <form
      style={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '2em 0',
      }}
    >
      <TextInput
        placeholder="Search"
        onChange={(e) => setText(e.target.value)}
        style={{
          width: '50%',
        }}
        radius="xl"
        size="md"
        variant={dark ? 'default' : 'filled'}
      />
      <NativeSelect
        size="md"
        style={{
          display: 'inline-block',
          borderRadius: '0.75em',
          color: dark ? 'lightgrey' : 'black',
          backgroundColor: dark ? '#62626A' : 'white',
        }}
        data={['Latest', 'Highest', 'Lowest']}
        placeholder="Latest"
        variant={dark ? 'default' : 'filled'}
        required
        onChange={(e) => console.log(e.target.value)}
      />
    </form>
  )
}

export default Forms
