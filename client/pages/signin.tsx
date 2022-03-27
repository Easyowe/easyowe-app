import { Box, Button, Group, Title, Text } from '@mantine/core'
import React from 'react'
import { getProviders, signIn, getSession } from 'next-auth/react'
import { getToken } from 'next-auth/jwt'

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const SignIn = ({ providers }: any) => {
  console.log(getToken)
  return (
    <Box
      sx={(theme) => ({ background: theme.colors.dark[5], height: '100vh' })}
    >
      <Group
      sx={{ width: '100%', textAlign: 'center', zIndex: 1 }}
      position="center"
      direction="column"
      mt='3em'
      >
        <Text
            sx={(theme) => ({
              color: theme.colors.dark[4],
            })}
            size="xl"
            weight={700}
            mb={-15}
        >
             KEEP TRACK OF WHO OWES YOU
          </Text>

          <Title order={2} sx={{ fontSize: '3em', width: '32ch' }}>
          Sign in to{' '}
          <span
            style={{
              color: '#5E4AE3',
            }}
          >
            Easyowe
          </span>{' '}
        </Title>

          <Text
          sx={(theme) => ({ width: '52ch', color: theme.colors.dark[4] })}
          size="sm" weight={500}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </Text>

          <Group>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any
             */}
            {Object.values(providers).map((provider: any) => (
              <Button
                size="md"
                key={provider.name}
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                {provider.name}
              </Button>
            ))}
          </Group>
      </Group>    
      <Box
        sx={(theme) => ({
          flex: 1,
          height: '63vh',
          width: '50%',
          right: 0,
          margin: '0.75em 0 0 -2em',
          position: 'absolute',
          background: theme.colors.dark[8],
          borderRadius: '2em 0 0 2em',
        })}
      ></Box>
    </Box>
  )
}

export default SignIn

// eslint-disable-next-line @typescript-eslint/no-explicit-any
SignIn.getInitialProps = async (ctx: { req: any; res: any }) => {
  const { req, res } = ctx
  const session = await getSession({ req })

  if (session && res && session.accessToken) {
    res.writeHead(302, { Location: '/' })
    res.end()
    return
  }
  return {
    session: undefined,
    providers: await getProviders(),
  }
}
