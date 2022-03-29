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
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import Mantine from '@/lib/Mantine'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <Mantine>
            <ModalsProvider>
              <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
              >
                <Component {...pageProps} />
              </ColorSchemeProvider>
            </ModalsProvider>
          </Mantine>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
