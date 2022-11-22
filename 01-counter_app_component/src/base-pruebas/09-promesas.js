import { getHeroeByid } from "./08-imp-exp"

export const getHeroeByidAsync = async ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeByid( id )
            if( p1 ) resolve( p1 )
            else reject( 'No se encontró al Héroe: ' + id )
        }, 1000 )
    })
}
