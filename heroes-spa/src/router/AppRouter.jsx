import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/main'
import { HeroesRoutes } from '../heroes/main'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}

export default AppRouter