/**
 * Calcular dias para adicionar
 * @param {number} dayOfWeek
 * @param {number} days quantos dias a incrementar?
 * @returns quantos deve ser incrementado
 */
 const calculateDayToAdd = (dayOfWeek, days) => {
    for(let x = 1; x <= days; x++) {
        (x % 7 == 0) && (days += 2)
    }
    return dayOfWeek == 0 ? days : (days - 1)
}

/**
 * Calcular quantos dias a incrementar
 * @param {number} dayOfWeek (0 = domingo)
 * @returns quantos dias a incrementar
 */
 const nextBusinessDay = dayOfWeek => {
    switch(dayOfWeek) {
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
 * Gerar uma data com mais 'x' dias uteis
 * @param {number} amount dias uteis a incrementar
 * @returns uma data formatada dd/MM/yyyy
 */
const generateDateWithBusinessDays = amount => {
    const currentDate = new Date()

    const dayOfWeek = currentDate.getDay()
    // current date data
    const dayOfMonth = currentDate.getDate()
    const mount = currentDate.getMonth()
    const year = currentDate.getFullYear()

    const businessDay = dayOfMonth + nextBusinessDay(dayOfWeek)
    const nextDate = new Date(year, mount, businessDay)

    const nextDayOfMonth = nextDate.getDate()
    const howManyDaysShouldIncrement = calculateDayToAdd(nextDate.getDay(), amount)

    const deadline = new Date(year, mount, nextDayOfMonth + howManyDaysShouldIncrement)

    return `${formatTimeUnit(deadline.getDate())}/${formatTimeUnit(deadline.getMonth() + 1)}/${deadline.getFullYear()}`
}

export {
    calculateDayToAdd,
    nextBusinessDay,
    formatTimeUnit,
    generateDateWithBusinessDays
}