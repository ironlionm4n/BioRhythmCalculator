import dayjs from 'dayjs'

export const calculateBiorhythm = (birthDate, targetDate, cycle) => {
  const birthD = dayjs(birthDate).startOf('day')
  const targetD = dayjs(targetDate).startOf('day')
  const diff = targetD.diff(birthD, 'days') // t
  return Math.sin((2 * Math.PI * diff) / cycle)
}

export const calculateBiorhythms = (birthDate, targetDate, cycle) => {
  const physicalCycle = 23
  const emotionalCycle = 28
  const mentalCycle = 33
  return {
    date: targetDate,
    physical: calculateBiorhythm(birthDate, targetDate, physicalCycle),
    emotional: calculateBiorhythm(birthDate, targetDate, emotionalCycle),
    mental: calculateBiorhythm(birthDate, targetDate, mentalCycle)
  }
}

export function calculateBiorhythmSeries (birthDate, startDate, size) {
  const series = []
  const startDay = dayjs(startDate).startOf('day')
  for (let i = 0; i < size; i++) {
    const targetDay = startDay.add(i, 'days').toISOString()
    series.push(calculateBiorhythms(birthDate, targetDay))
  }
  return series
}
