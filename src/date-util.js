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

export {
    calculateDayToAdd,
    nextBusinessDay
}