import { calculateDayToAdd } from '../src/date-util.js'

describe('Calcular dias para adicionar', () => {
    test('Deve acrescentar 3 dias uteis sendo hoje domingo', () => {
        const incrementDays = 3
        const sunday = 0
        const businessDay = 3
        expect(calculateDayToAdd(sunday, businessDay)).toBe(incrementDays)
    })
    test('Deve acrescentar 7 dias uteis sendo hoje segunda', () => {
        const incrementDays = 8
        const monday = 1
        const businessDay = 7
        expect(calculateDayToAdd(monday, businessDay)).toBe(incrementDays)
    })
    test('Deve acrescentar 14 dias uteis sendo hoje sexta feira', () => {
        const incrementDays = 17
        const friday = 5
        const businessDay = 14
        expect(calculateDayToAdd(friday, businessDay)).toBe(incrementDays)
    })
    test('Deve acrescentar 14 dias uteis sendo hoje domingp', () => {
        const incrementDays = 18
        const sunday = 0
        const businessDay = 14
        expect(calculateDayToAdd(sunday, businessDay)).toBe(incrementDays)
    })
})
