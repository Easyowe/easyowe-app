import { ColorScheme, MantineProvider } from '@mantine/core'
import React, { useState } from 'react'

type Props = {
  children: React.ReactNode
}

const Mantine = (props: Props) => {
  const [colorScheme] = useState<ColorScheme>('dark')
  /*   const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark')) */
  return (
    <>
      <MantineProvider
        theme={{
          // https://mantine.dev/theming/extend-theme/#extend-or-replace-colors
          colorScheme,
          breakpoints: {
            xs: 500,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
          colors: {
            dark: [
              '#F2F2F3',
              '#E5E5E6',
              '#CACACE',
              '#B0B0B5',
              '#95959D',
              '#1A1A1C',
              '#4A4A4F',
              '#1A1A1C',
              '#2B2B31',
              '#19191A',
            ],
            primary: [
              '#EBE9FC',
              '#D8D3F8',
              '#B1A7F1',
              '#897BEA',
              '#624EE4',
              '#5E4AE3',
              '#2F1BB1',
              '#1B0A8E',
              '#0A096D',
              '#0A096D',
            ],
          },
          primaryColor: 'primary',
        }}
        withGlobalStyles
      >
        {props.children}
      </MantineProvider>
    </>
  )
}

export default Mantine
