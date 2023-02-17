import './App.css'
import Exe1 from './componets/Exe1'
import Exe2 from './componets/Exe2'
import Master from './componets/Master'
import Animals from './componets/Animals'
import array from './assets/array'

function App() {
  
  const imprime = (info) => {
    return console.log(info)
  }

  return (
    <div className="App">
      <div className="left">
        <Exe1 />
      </div>
      <div className="center">
        <Master />
      </div>
      <div className="right">
        <Exe2 name='Alan' funcao={imprime} array={array}/>
      </div>
      <div className="animals">
        <Animals />
      </div>
    </div>
  )
}

export default App
