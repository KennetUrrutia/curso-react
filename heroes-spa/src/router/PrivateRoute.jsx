import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext)
  //Almacenar la ultima pagina para volver a entral al momento del login
  const { pathname, search } = useLocation()

  const lastPath = pathname + search
  localStorage.setItem('lastPath', lastPath)
  console.log(lastPath)
  

  return (logged) ? children : <Navigate to='/login' />
}
