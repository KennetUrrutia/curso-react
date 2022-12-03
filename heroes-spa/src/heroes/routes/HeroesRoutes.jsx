import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui/main"
import { MarvelPage, DcPages, Heros, Search } from "../main"

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPages />} />
          <Route path='search' element={<Search />} />
          <Route path='heros' element={<Heros />} />
          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  )
}
