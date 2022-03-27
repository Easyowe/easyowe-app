import React from 'react'
import { useRouter } from 'next/router'
import { Text } from '@mantine/core'
import { useSplit } from 'hooks/useSplit'

const Split = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useSplit(id as string)
  return <Text color={'#fff'}>{data?.name}</Text>
}

export default Split
