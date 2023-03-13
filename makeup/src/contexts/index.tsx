import { useContext, createContext } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const authContext = useContext(AuthContext)
  
  if (!authContext) throw Error('AuthProvider fora do escopo da chamada')

  return authContext
}
