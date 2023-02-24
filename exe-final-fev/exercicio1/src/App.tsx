import { useState } from "react"
import TaskList from "./components/TaskList"
import { Form, FormTitle } from "./styles"
import { initialTasks } from "./utils/tasks"

export type TaskType = {
  title: string
  description: string
  onClickDelete?: () => void
}

function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>(initialTasks)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  /**
   * Tarefa 5 - Conserte o erro abaixo, passando a prop corretamente para o componente TaskList.
   * Tarefa 6 - Transforme os inputs card-title e card-description em inputs controlados, adicionando a lógica
   * de estados
   * Tarefa 7 - Implemente a função addNewCard abaixo, para adicionar à lista um novo card. Lembre-se: você não
   * pode modificar o objeto do estado tasks diretamente com um tasks.push. Pense na possibilidade de utilizar um
   * spread.
   */

  const addNewCard = () => {
    setTasks([...tasks, { title, description }])
  }

  return (
    <div>
      <Form>
        <FormTitle>Novo Card</FormTitle>
        <label htmlFor="card-title">Título</label>
        <input id="card-title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="card-description">Descrição</label>
        <input id="card-description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={addNewCard}>Adicionar</button>
      </Form>

      <TaskList setTasks={setTasks} tasks={tasks}/>
    </div>
  )
}

export default App
