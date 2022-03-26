import { ActivityCard } from './ActivityCard'
import { Box } from '@mantine/core'
import { useForm, formList } from '@mantine/form'
import React from 'react'

const ActivityLog = () => {
  const form = useForm({
    initialValues: {
      activityLog: formList([
        {
          name: 'Jon Doe',
          date: 'NO RECORDED ACTIVITY',
          value: 24.31,
        },
      ]),
    },
  })

  const fields = form.values.activityLog.map((activity, index) => (
    <ActivityCard key={index} activity={activity} />
  ))

  return <Box mx="auto">{fields}</Box>
}

export default ActivityLog
