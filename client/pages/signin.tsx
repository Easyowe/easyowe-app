import { Box, Button, Group, Center } from '@mantine/core'
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
      <Group>
        <Box
          sx={(theme) => ({
            flex: 1,
            height: '100vh',
            width: '100%',
            background: theme.colors.dark[8],
            borderRadius: '0 2em 2em 0',
          })}
        ></Box>
        <Center style={{ height: '100%', width: '100%', flex: 1.5 }}>
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
        </Center>
      </Group>
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
