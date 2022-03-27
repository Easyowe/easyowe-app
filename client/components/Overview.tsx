import { Group } from '@mantine/core'
import StatBox from './StatBox'
import React from 'react'
import Chart from './Chart'

const Overview = () => {
  return (
    <div className="overview_container">
      <Group flex-grow="false" position="center">
        <StatBox title="YOU OWE" stat="$53.23" buttonText="View" />
        <StatBox title="YOU ARE OWED" stat="$72.32" buttonText="View" />
        <StatBox title="INFORMATION" stat="STAT" buttonText="View" />
      </Group>
      <Chart />
    </div>
  )
}

export default Overview
