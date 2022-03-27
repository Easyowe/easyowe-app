import { ActivityCard } from './ActivityCard'
import { Box } from '@mantine/core'
import React from 'react'
import { useSplits } from 'hooks/useSplits'
import { SplitType } from 'types/split'

const ActivityLog = () => {
  const { data: splits, error, isLoading } = useSplits()

  return (
    <Box mx="auto">
      {error && <div>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      {splits &&
        splits.map((split: SplitType) => (
          <ActivityCard key={split.id} activity={split} />
        ))}
    </Box>
  )
}

export default ActivityLog
