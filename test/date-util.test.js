import { calculateDayToAdd, nextBusinessDay } from '../src/date-util.js'

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

describe('Calcular quantos dias a incrementar com base no dia da semana', () =>{
    test('Sendo domingo, deve retornar 1 dia', () => {
        const expected = 1
        const sunday = 0
        expect(nextBusinessDay(sunday)).toBe(expected)
    })
    test('Sendo quinta feira, deve retornar 1 dia', () => {
        const expected = 1
        const thursday = 4
        expect(nextBusinessDay(thursday)).toBe(expected)
    })
    test('Sendo sexta feira, deve retornar 3 dias', () => {
        const expected = 3
        const friday = 5
        expect(nextBusinessDay(friday)).toBe(expected)
    })
    test('Sendo sábado, deve retornar 2 dias', () => {
        const expected = 2
        const saturday = 6
        expect(nextBusinessDay(saturday)).toBe(expected)
    })
    test('Sendo domingo à quinta feira, deve retornar 1 dia', () => {
        const expected = 1
        const daysOfWeek = [0, 1, 2, 3, 4]
        daysOfWeek.forEach(day => {
            expect(nextBusinessDay(day)).toBe(expected)
        })
    })
})
