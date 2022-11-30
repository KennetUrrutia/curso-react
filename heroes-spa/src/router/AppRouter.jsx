import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../auth/pages/LoginPage"
import DcPages from "../heroes/pages/DcPages"
import MarvelPage from "../heroes/pages/MarvelPage"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPages />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='/' element={<Navigate to='/marvel' />} />
      </Routes>
    </>
  )
}

export default AppRouter