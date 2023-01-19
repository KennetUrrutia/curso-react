import { HeroCard } from "../components/main"
import { useForm } from '../../hooks/main'
import { useNavigate } from "react-router-dom"

export const Search = () => {

  const navigate = useNavigate()
  const { searchText, handleInputChange } = useForm({
    searchText: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (searchText.trim().length <= 1) return
    
    navigate(`?q=${ searchText }`)
  }
  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">
            Search a Hero
          </div>
          <div className="alert alert-danger">
            No hero with <b>ABC</b>
          </div>

          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  )
}
