import flow from '../src/asynchronous.flow.with.observer.js'

describe('Alterar fluxo conforme resultado da promise', () => {
    test('Deve ser uma função', () => {
        expect(flow).toBeInstanceOf(Function)
    })
})