import { flow, submit } from '../src/asynchronous.flow.with.observer.js'

describe('Alterar fluxo conforme resultado da promise', () => {
    test('Deve ser uma função', () => {
        expect(flow).toBeInstanceOf(Function)
    })

    test('Deve retornar uma promise', async () => {
        expect(flow()).toBeInstanceOf(Promise)
    })

    test('Deve impedir de executar o erro', async () =>{
        try {
            await flow(true)
            // aqui seria um ponto crítico
            throw new Error('Não alterou o fluxo!')
        } catch ({ message }) {
            expect(message).toBe('rejeitado')
        }
    })

    test('Deve alterar o fluxo', async () => {
        const { message } = await submit(true)
        expect(message).toBe('rejeitado')
    })

    test('Deve seguir o fluxo', async () => {
        const { message } = await submit(false)
        expect(message).toBe('seguiu o fluxo')
    })
})