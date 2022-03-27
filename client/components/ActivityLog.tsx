import { ActivityCard } from './ActivityCard'
import { Box } from '@mantine/core'
import React from 'react'
import { useSplits } from 'hooks/useSplits'
import { SplitType } from 'types/split'
import { useSession } from 'next-auth/react'

const ActivityLog = () => {
  const { data: session } = useSession()
  const {
    data: splits,
    error,
    isLoading,
  } = useSplits(session?.user?.id as string)
  console.log(session?.user?.id)

  return (
    <Box mx="auto">
      {error && <div>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      {splits &&
        splits.map((split: SplitType) => (
          <ActivityCard key={split._id} activity={split} />
        ))}
    </Box>
  )
}

export default ActivityLog
