import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('Prueba en getUser, debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABCD1234',
            username: 'EL_Papi1502',
        }

        const user = getUser()

        expect( testUser ).toStrictEqual( user )
    })

    test('Prueba en getUsuarioActivo, debe de retornar un objeto', () => {
        const userName = 'EL_Papi1502'

        const testActiveUser = {
            uid: 'ABCD8923',
            username: userName,
        }

        const activeUser = getUsuarioActivo(userName)

        expect( activeUser ).toStrictEqual( testActiveUser )
        expect( userName ).toBe( activeUser.username )
    })
})