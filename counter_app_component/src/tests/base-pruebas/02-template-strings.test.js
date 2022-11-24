import { getSaludo } from '../../base-pruebas/02-template-strigs'

describe('Pruebas en el archivo 02-template-strings', () => { 
    test('getSaludo debe de retornar "Hola Kennet"', ()=>{
        const name = 'Kennet'
        const message = getSaludo(name)

        expect( message ).toBe(`Hola ${name}`)
    })
 })