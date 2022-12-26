import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const Heros = () => {
  const navigate = useNavigate()
  const { id, ...rest } = useParams()

  // const hero = getHeroById(id)
  const hero = useMemo(() => getHeroById(id), [id])

  const imgUrl = require(`/assets/heroes/${id}.jpg`)

  const goToBack = () => {
    hero.publisher === 'DC Comics' && navigate('/dc')
    hero.publisher === 'Marvel Comics' && navigate('/marvel')
  }

  if (!hero) {
    return <Navigate to='/marvel' />
  }
  // console.log(id, rest)

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imgUrl}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__backInLeft"
        />
      </div>
      <div className="col-8">
        <h3 className='animate__animated animate__bounce'>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
          <li className="list-group-item"><b>First Appareance: </b>{hero.first_appearance}</li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-primary"
          onClick={goToBack}
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
