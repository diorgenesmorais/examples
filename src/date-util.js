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

export {
    calculateDayToAdd
}