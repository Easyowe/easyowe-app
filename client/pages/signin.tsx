import {
  Box,
  Button,
  Group,
  PasswordInput,
  Container,
  Grid,
  Text,
  Title,
  TextInput,
} from '@mantine/core'
import React from 'react'
import { getProviders, signIn, getSession } from 'next-auth/react'
import { getToken } from 'next-auth/jwt'
import { useForm } from '@mantine/form'

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const SignIn = ({ providers }: any) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })
  console.log(getToken)
  return (
    <Container
      fluid={true}
      sx={(theme) => ({ background: theme.colors.dark[5], height: '100vh' })}
    >
      <Grid>
        <Grid.Col
          md={5}
          sx={(theme) => ({
            flex: 1,
            height: '100vh',
            width: '100%',
            background: theme.colors.dark[8],
            borderRadius: '0 2em 2em 0',
            position: 'relative',
          })}
        >
          <div
            style={{
              position: 'absolute',
              width: '60%',
              height: '95%',
              left: '10%',
              top: '1%',
              background: '#555566',
              borderRadius: '50px',
              transform: 'rotate(-45deg)',
            }}
          ></div>
        </Grid.Col>

        <Grid.Col md={7}>
          <Box sx={{ height: '50%' }}>
            <Box
              sx={{
                height: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
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

              <Title order={2} sx={{ fontSize: '2.5em', width: 'none' }}>
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
                size="sm"
                weight={500}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </Text>
            </Box>

            <Grid>
              <Grid.Col
                md={6}
                style={{ height: '50%', borderRight: '1px solid' }}
              >
                <Box sx={{ width: '80%' }} mx="auto">
                  <form
                    onSubmit={form.onSubmit((values) => console.log(values))}
                  >
                    <TextInput
                      label=""
                      placeholder="your@email.com"
                      {...form.getInputProps('email')}
                      styles={{
                        input: { background: '#2B2B31' },
                      }}
                    />

                    <PasswordInput
                      mt="sm"
                      label=""
                      placeholder="Password"
                      {...form.getInputProps('password')}
                      styles={{
                        input: { background: '#2B2B31' },
                      }}
                    />

                    <Group position="right" mt="md">
                      <Button
                        style={{
                          width: '100%',
                          background: '#5E4AE3',
                          fontSize: '1.2em',
                          borderRadius: '5px',
                        }}
                        type="submit"
                      >
                        Create
                      </Button>
                    </Group>
                  </form>
                </Box>
              </Grid.Col>
              <Grid.Col md={1}></Grid.Col>
              <Grid.Col md={4} style={{ height: '50%' }}>
                <Group>
                  {providers &&
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    Object?.values(providers).map((provider: any) => (
                      <Button
                        size="md"
                        key={provider.name}
                        onClick={() =>
                          signIn(provider.id, { callbackUrl: '/' })
                        }
                        style={{
                          width: '50%',
                          background: 'transparent',
                          border: '1px solid #555566',
                          fontWeight: '700',
                          fontSize: '1.3em',
                        }}
                      >
                        {provider.name}
                      </Button>
                    ))}
                </Group>
              </Grid.Col>
            </Grid>
          </Box>
          <Box sx={{ height: '50%' }}>
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
        </Grid.Col>
      </Grid>
    </Container>
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
