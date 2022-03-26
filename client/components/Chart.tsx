import { Container } from '@mantine/core'
import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { mockChartData } from 'lib/mockChartData'

// type Props = {}

const Chart = () => {
  //   const { colorScheme } = useMantineColorScheme()
  return (
    <Container size={'lg'} sx={{ width: '100%', height: '50vh' }}>
      <ResponsiveLine
        data={mockChartData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        axisTop={null}
        axisRight={null}
        curve="linear"
        theme={{
          background: 'transparent',
          textColor: '#5E4AE3',
          axis: {
            domain: { line: { stroke: '#4A4A4F' } },
          },
          grid: { line: { stroke: 'transparent' } },
        }}
        pointSize={10}
        pointColor={{ theme: 'textColor' }}
        pointBorderColor={{ from: '' }}
        animate={true}
        useMesh={false}
        colors={'#5E4AE3'}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  cursor: 'pointer',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Container>
  )
}

export default Chart
