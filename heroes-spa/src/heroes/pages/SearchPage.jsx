import { HeroCard } from '../components/main'
import { useForm } from '../../hooks/main'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHerosByName } from '../helpers/getHerosByName'

export const Search = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const heroes = getHerosByName(q)

  const showSearch = (q.length === 0) // Es una condicion que regresa un valor bool, ej. q.length === 0 ? true : false
  const showError = (q.length > 0) && (heroes.length === 0) // Es una condicion que regresa un valor bool, ej. q.length === 0 ? true : false

  const { searchText, handleInputChange } = useForm({
    searchText: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // if (searchText.trim().length <= 1) return
    navigate(`?q=${searchText}`)
  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>
              Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          <div
            className='alert alert-primary animate__animated animate__fadeIn'
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a Hero
          </div>
          <div
            className='alert alert-danger animate__animated animate__fadeIn'
            style={{ display: showError ? '' : 'none' }}
          >
            No hero with <b>{q}</b>
          </div>

          {heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  )
}
