import { sumAll, upAndDown } from './main.js'

describe('sumAll', () => {
    it('works', () => {
        expect(sumAll()).toEqual(0)
    })
})

describe('upAndDown', () => {
    it('works', () => {
        expect(upAndDown([])).toEqual([])
    })
})