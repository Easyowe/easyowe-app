import React from 'react'
import { useRouter } from 'next/router'
import { Text } from '@mantine/core'

const Split = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  return <Text color={'#fff'}>{id}</Text>
}

export default Split
