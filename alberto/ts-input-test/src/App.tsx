import "./App.css"
import LifeCount from "./components/LifeCount"
import Title from "./components/Title"
import TitleClass from "./components/TitleClass"

function App() {
  return (
    <div className="App">
      <Title value="Título da páginaaaaaaaa" />
      <TitleClass value="Título 3" />
      <LifeCount initialLifes={5} />
    </div>
  )
}

export default App
