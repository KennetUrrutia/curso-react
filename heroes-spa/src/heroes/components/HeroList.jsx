import { HeroCard } from './main'
import { getHeroesByPublisher } from '../helpers/main'

export const HeroList = ({ publisher }) => {
  const heros = getHeroesByPublisher(publisher)

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {heros.map(item => (
        <HeroCard key={item.id} {...item} />
      ))}
    </div>
  )
}