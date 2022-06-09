import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  ReferenceLine,
  CartesianGrid
} from 'recharts'
import { calculateBiorhythmSeries } from '../helpers/calculations'
import dayjs from 'dayjs'
import './BiorhythmChart.css'

const formatDate = isoString => {
  return dayjs(isoString).format('D MMM')
}

const BiorhythmChart = ({ birthDate, targetDate }) => {
  const startDate = dayjs(targetDate)
    .subtract(15, 'days')
    .toISOString()
  const data = calculateBiorhythmSeries(birthDate, startDate, 31).map(item => ({
    ...item,
    date: formatDate(item.date)
  }))

  return (
    <ResponsiveContainer width='100%' height={200} className="biorhythm-chart">
      <LineChart data={data}>
        <CartesianGrid vertical={false} strokeDasharray='3 3' />
        <XAxis
          dataKey='date'
          ticks={[data[3].date, data[15].date, data[27].date]}
        />
        <ReferenceLine x={data[15].date} stroke='orange' strokeWidth={1.75}/>
        <Line dataKey='physical' dot={false} className="physical" type='natural' />
        <Line dataKey='emotional' dot={false} className="emotional" type='natural' />
        <Line dataKey='mental' dot={false} className="mental" type='natural' />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default BiorhythmChart
