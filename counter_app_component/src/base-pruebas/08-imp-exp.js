import heroes from "../data/heroes"

export const getHeroeByid = (id) => {
    return heroes.find( (heroe) => heroe.id === id )
}

export const getHeroesByOwner = (owner) => {
    return heroes.filter( (heroe) => heroe.owner === owner)
}




