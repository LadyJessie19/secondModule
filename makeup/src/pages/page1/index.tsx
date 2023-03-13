import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const handleClick = () => {
      navigate('/')
  }

  return (
    <div>
      <div>
        <input name="name" placeholder="Seu Nome" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Seu Email" />
      </div>
      <div>
        <button onClick={handleClick}>Entrar</button>
      </div>
    </div>
  )
}

export default Login