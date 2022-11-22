import { getHeroeByid, getHeroesByOwner } from '../../base-pruebas/08-imp-exp'

describe("Peuebas en 08-imp-exp", () => { 

  test("Debe de retornar en getHeroeByid un ID", () => { 
      const id = 1
      const hero = getHeroeByid( id )

      expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })
  
  test("Debe de retornar en getHeroeByid un undefined", () => { 
      const id = 1
      const hero = getHeroeByid( id )

      expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })
  
  test('getHeroeByid debe de retornar undefined si no existe', () => { 
    const id = 100
    const hero = getHeroeByid( id )

    console.log( hero )
    expect( hero ).toBeFalsy() // valores negaticos (null, undefined o false)
  })

  //Tarea
  //getHeroesByOwner

  //Debe de retornar un arreglo con los héroes de DC
  //Legth === 3
  //toEqual al arreglo filtrao

  test('Debe de retornar un arreglo con los héroes de DC', () => { 
    const owner = 'DC'
    const heroes = getHeroesByOwner( owner )

    console.log(heroes)
    expect(heroes.length).toBe( 3 )
  })

  //Debe de retornar un arreglo con los héroes de Marvel 
  //Legth === 2
  test('Debe de retornar un arreglo con los héroes de Marvel', () => { 
    const owner = 'Marvel'
    const heroes = getHeroesByOwner( owner )

    console.log(heroes)
    expect(heroes.length).toBe( 2 )
  })

})