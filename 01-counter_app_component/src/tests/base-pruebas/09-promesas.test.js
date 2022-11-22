import { getHeroeByidAsync } from "../../base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => {

  test('getHeroeByidAsync debe de retornar un héroe', (done) => {
    const id = 1
    getHeroeByidAsync(id)
      .then((hero) => {
        expect(hero).toEqual({
          id: 1,
          name: "Batman",
          owner: "DC",
        })

        done()
      })
  })

  test('getHeroeByidAsync debe de tener un herror si heroe no existe', (done) => {
    const id = 10
    getHeroeByidAsync(id)
      .then((hero) => {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(hero).toBeFalsy()
        done()
      })
      .catch((error) => {
        console.log(error)
        // eslint-disable-next-line jest/no-conditional-expect
        expect(error).toBe(`No se encontró al Héroe: ${id}`)
        done()
      })
  })
})