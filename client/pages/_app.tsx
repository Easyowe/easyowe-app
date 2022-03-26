import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
// import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        // https://mantine.dev/theming/extend-theme/#extend-or-replace-colors
        colors: {
          dark: [
            '#F2F2F3',
            '#E5E5E6',
            '#CACACE',
            '#B0B0B5',
            '#95959D',
            '#1A1A1C',
            '#62626A',
            '#4A4A4F',
            '#313135',
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
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp
