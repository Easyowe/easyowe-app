import {
  Box,
  Button,
  Group,
  Modal,
  TextInput,
  useMantineTheme,
  NativeSelect,
  NumberInput,
} from '@mantine/core'
import React from 'react'
import { z } from 'zod'
import { useForm, zodResolver } from '@mantine/form'
import { CurrencyDollar } from 'tabler-icons-react'
import api from '@/lib/axiosStore'
import { useSession } from 'next-auth/react'

type Props = {
  opened: boolean
  setOpened: (opened: boolean) => void
}
const schema = z.object({
  name: z.string(),
  amount: z.number().positive({ message: 'Invalid price' }),
  category: z.string(),
  people: z.array(z.string()).or(z.string()),
})
export function CreateSplitModal({ opened, setOpened }: Props) {
  const { data: session } = useSession()
  console.log(session)
  const { colors } = useMantineTheme()
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: '',
      people: '',
      amount: '',
      category: '',
    },
  })
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create Split"
      centered
      size={'xl'}
      padding={52}
      styles={{ modal: { border: `2px solid ${colors.dark[8]}` } }}
      radius={16}
    >
      <Box>
        <form
          onSubmit={form.onSubmit((values) =>
            api
              .post('splits', values)
              .then((res) => console.log(res))
              .catch((err) => console.error(err))
          )}
        >
          <TextInput
            size="sm"
            styles={{
              input: {
                backgroundColor: colors.dark[8],
                '&:focus': {
                  outline: 'none',
                  border: 'transparent',
                },
              },
            }}
            required
            error={form.errors.name}
            label="Name"
            placeholder="Night Out 16th Jan"
            {...form.getInputProps('name')}
          />
          <TextInput
            size="sm"
            styles={{
              input: {
                backgroundColor: colors.dark[8],
                '&:focus': {
                  outline: 'none',
                  border: 'transparent',
                },
              },
            }}
            required
            error={form.errors.people}
            label="Friends"
            placeholder="John Doe, Jane Doe"
            {...form.getInputProps('people')}
          />
          <NativeSelect
            data={['Transportation', 'Food', 'Bills']}
            size="sm"
            styles={{
              input: {
                backgroundColor: colors.dark[8],
                '&:focus': {
                  outline: 'none',
                  border: 'transparent',
                },
              },
            }}
            required
            error={form.errors.category}
            label="Category"
            placeholder="Pick a category"
            mt="sm"
            {...form.getInputProps('category')}
          />
          <NumberInput
            icon={<CurrencyDollar size={18} />}
            size="sm"
            styles={{
              input: {
                backgroundColor: colors.dark[8],
                '&:focus': {
                  outline: 'none',
                  border: 'transparent',
                },
              },
            }}
            required
            error={form.errors.amount}
            label="Name"
            placeholder="25.32"
            mt="sm"
            {...form.getInputProps('amount')}
          />

          <Group position="right" mt="xl">
            <Button type="submit" sx={{ background: colors.primary[5] }}>
              Submit
            </Button>
          </Group>
        </form>
      </Box>
    </Modal>
  )
}
