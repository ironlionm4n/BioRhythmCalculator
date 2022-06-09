import { calculateBiorhythms } from "../helpers/calculations";

it('calculates the biorhythm', () => {
    const {physical} = calculateBiorhythms('1995-01-01', '2020-02-18')
    expect(physical).toBeCloseTo(0.5196)
})

it('calculates the biorhythm', () => {
    const {emotional} = calculateBiorhythms('1995-01-01', '2020-02-18')
    expect(emotional).toBeCloseTo(-0.9010)
})

it('calculates the biorhythm', () => {
    const {mental} = calculateBiorhythms('1995-01-01', '2020-02-18')
    expect(mental).toBeCloseTo(0.8146)
})