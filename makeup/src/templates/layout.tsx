import { useAuth } from '@/contexts/auth-context'
import { Link } from 'react-router-dom'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout(() => {
      navigate('/login')
    })
  }

  if (!user) return <Outlet />

  return (
    <div>
      <header>
        <h1>Olá {user.name}!</h1>
        <button onClick={handleLogout}>Sair</button>
        <hr />
      </header>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Usuários</Link></li>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout