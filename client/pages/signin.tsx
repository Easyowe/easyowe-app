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
import { useForm } from '@mantine/form'
import Navbar from '@components/LandingPage/Navbar'
import { useMediaQuery } from '@mantine/hooks'
import Footer from '@components/LandingPage/Footer'
import Image from 'next/image'

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const SignIn = ({ providers }: any) => {
  const isLarge = useMediaQuery('(min-width: 3100px)')
  const isMedium = useMediaQuery('(max-width: 1600px)')
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })
  return (
    <>
      <Navbar />
      <Container
        fluid={true}
        sx={(theme) => ({
          background: theme.colors.dark[5],
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: 0,
        })}
      >
        <Grid sx={{ justifyContent: 'center', width: '100%' }}>
          <Grid.Col
            md={5}
            sx={(theme) => ({
              display: isMedium ? 'none' : 'grid',
              placeItems: 'center',
              flex: 1,
              height: '100vh',
              background: theme.colors.dark[8],
              borderRadius: '0 2em 2em 0',
              padding: '12em 4em',
              '@media (min-width: 2600px)': {
                padding: '0em 10em',
              },
              '@media (min-width: 3200px)': {
                padding: '0em 14em',
              },
              '@media (min-width: 3600px)': {
                padding: '0em 18em',
              },
              '@media (min-width: 4200px)': {
                padding: '0em 25em',
              },
              '@media (min-width: 4500px)': {
                padding: '0em 35em',
              },
              '@media (min-width: 4800px)': {
                padding: '0em 40em',
              },
              '@media (min-width: 5100px)': {
                padding: '0em 42em',
              },
              overflow: 'hidden',
              zIndex: 1,
            })}
          >
            <Box
              sx={{
                position: 'relative',
                minWidth: '100%',
                height: '115vh',
                zIndex: 10,
                transform: 'rotate(-12deg)',
              }}
            >
              <Image
                src={'/easyowe-iphone-mock.svg'}
                alt="app mock up"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </Grid.Col>

          <Grid.Col
            md={7}
            sx={{
              padding: isLarge ? '0 20em' : '0',
              marginTop: '15em',
            }}
          >
            <Box>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Text
                  sx={(theme) => ({
                    color: theme.colors.dark[4],
                  })}
                  size="xl"
                  weight={700}
                >
                  KEEP TRACK OF WHO OWES YOU
                </Text>

                <Title
                  order={2}
                  sx={{ fontSize: '2.5em', width: 'none' }}
                  mb={'0.75em'}
                >
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
                  align="center"
                  sx={(theme) => ({
                    width: '50%',
                    color: theme.colors.dark[4],
                  })}
                  size="sm"
                  weight={500}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </Text>
              </Box>
              <Grid
                pt={'5em'}
                sx={{ padding: `${isLarge ? '0 20em' : '0'}` }}
                align="center"
              >
                <Grid.Col
                  md={6}
                  style={{ height: '100%', borderRight: '1px solid #606074' }}
                >
                  <Box sx={{ width: '75%' }} mx="auto">
                    <form
                      onSubmit={form.onSubmit((values) => console.log(values))}
                    >
                      <TextInput
                        size="md"
                        label=""
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                        styles={{
                          input: { background: '#2B2B31' },
                        }}
                      />

                      <PasswordInput
                        size="md"
                        mt="sm"
                        label=""
                        placeholder="Password"
                        {...form.getInputProps('password')}
                        styles={{
                          input: { background: '#2B2B31' },
                        }}
                      />

                      <Group position={'right'} mt="md">
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
                <Grid.Col
                  md={4}
                  style={{
                    height: '50%',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Group>
                    {providers &&
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      Object?.values(providers).map((provider: any) => (
                        <Button
                          size="lg"
                          key={provider.name}
                          onClick={() =>
                            signIn(provider.id, { callbackUrl: '/' })
                          }
                          style={{
                            width: '100%',
                            background: 'transparent',
                            border: '1px solid #4b4b4e',
                            fontWeight: '700',
                            fontSize: '1em',
                          }}
                        >
                          {provider.name}
                        </Button>
                      ))}
                  </Group>
                </Grid.Col>
              </Grid>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
      <Footer />
    </>
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
