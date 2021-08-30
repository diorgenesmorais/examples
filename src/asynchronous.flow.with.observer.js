const flow = async value => {
    return new Promise((resolve, reject) => {
        if (value) {
            reject({ message: 'rejeitado' })
        }
        resolve({ message: 'resolvido'})
    })
}

const submit = async condition => {
    try {
        await flow(condition)
    } catch (error) {
        return error
    }

    return {
        message: 'seguiu o fluxo'
    }
}

export {
    flow,
    submit
}
