import './App.css'
import Background from './components/Background'
import { Back } from "./components/styles"

/* 
Guardando a tipagem do marcão
React.Dispatch<React.SetStateAction<O TIPO>>
*/

function App() {
  return (
    <div className="App">
      <Back>
        <Background />
      </Back>
    </div>
  )
}

export default App
