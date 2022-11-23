import { Routes, Route, Navigate, Link } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './Homepage'
import LoginPage from './LoginPage'
import Error404 from './Error404'
import Navbar from './Navbar'
import UserProvider from './context/UserProvider'

const MainApp = () => {
  return (
    <UserProvider>
      {/* <h1>MainApp</h1> */}
      <Navbar />
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='login' element={<LoginPage />} />

        {/* <Route path='/*' element={<Error404 />} /> */}
        <Route path='/*' element={<Navigate to={'about'} />} />
      </Routes>
    </UserProvider>
  )
}

export default MainApp