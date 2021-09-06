/**
 * Calcular dias para adicionar
 * @param {number} weekDay zero base (0 = domingo)
 * @param {number} days quantos dias a incrementar?
 * @returns quantos deve ser incrementado
 */
 const calculateDayToAdd = (weekDay, days) => {
    for(let x = 1; x <= days; x++) {
        (x % 7 == 0) && (days += 2)
    }
    return weekDay == 0 ? days : (days - 1)
}

/**
 * Calcular quantos dias a incrementar
 * @param {number} weekDay zero base (0 = domingo)
 * @returns quantos dias a incrementar
 */
 const nextBusinessDay = weekDay => {
    switch(weekDay) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            return 1
        case 5:
            return 3
        case 6:
            return 2
    }
}

/**
 * Formatar o número sempre em dois algarismo: '02', '07' ou '10'...
 * @param {number} unit
 * @returns a unidade como string
 */
 const formatTimeUnit = unit => unit < 10 ? `0${unit}` : `${unit}`

 /**
 * Formatar a data dd/MM/yyyy
 * @param {Date} date object Date
 * @returns por exemplo uma data '01/09/2021'
 */
const formatDate = date => {
    return `${formatTimeUnit(date.getDate())}/${formatTimeUnit(date.getMonth() + 1)}/${date.getFullYear()}`
}

 /**
 * Gerar uma data com mais 'x' dias uteis
 * @param {Date} date informar um obejeto Date
 * @param {number} amount dias uteis a incrementar
 * @returns uma data formatada dd/MM/yyyy
 */
const generateDateWithBusinessDays = (date, amount) => {
    const weekDay = date.getDay()
    const monthDay = date.getDate()

    const businessDay = monthDay + nextBusinessDay(weekDay)
    date.setDate(businessDay)

    const nextDayOfMonth = date.getDate()
    const howManyDaysShouldIncrement = calculateDayToAdd(date.getDay(), amount)
    date.setDate(nextDayOfMonth + howManyDaysShouldIncrement)

    return formatDate(date)
}

export {
    calculateDayToAdd,
    nextBusinessDay,
    formatTimeUnit,
    formatDate,
    generateDateWithBusinessDays
}