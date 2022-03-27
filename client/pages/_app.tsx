import React, { useState } from 'react'
import type { AppProps } from 'next/app'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { ModalsProvider } from '@mantine/modals'
// import * as modals from '@components/modals'
// import CreateSplitModal from '@components/modals/CreateSplitModal'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  // const dark = colorScheme === 'dark';

  return (
    <SessionProvider session={session}>
      <MantineProvider
        theme={{
          // https://mantine.dev/theming/extend-theme/#extend-or-replace-colors
          colorScheme,
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
        <ModalsProvider>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <Component {...pageProps} />
          </ColorSchemeProvider>
        </ModalsProvider>
      </MantineProvider>
    </SessionProvider>
  )
}

export default MyApp
