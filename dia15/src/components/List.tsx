import React from "react"

type Props = {
    tasks:Tasks
}

type State = {
    taskList: Tasks
    message: string
    task: string
}
type Tasks = string[]

class List extends React.Component<Props, State>{
    state = {
        task: '',
        taskList: this.props.tasks,
        message: ''
    }

    addTask(): void{
        const { task, taskList } = this.state
        if(task){
            this.setState({
                taskList: [...taskList, task],
                message: `A tarefa ${task} foi adicionada com sucesso`
            })

        }
        this.setState({
            message: `Necessário escrever no campo`
        })
    }

    removeTask(task:string):void {
        const {taskList} = this.state
        this.setState({
            taskList: taskList.filter((item) => item !== task),
            message: `A tarefa ${task} foi removida com sucesso`

        })
    }

    /* componentDidUpdate(_, prevState: Readonly<State>): void {
        if(JSON.stringify(prevState.taskList) !== JSON.stringify(this.state.taskList)){
            this.setState({
                message: 'Uma tarefa foi removida'
            })
        }
    } */

    render() {
        const {taskList, message} = this.state
        return(
            <div>
                <h1>Lista de Tarefas</h1>
                {!!message && <h2>{message}</h2>}

                <input type="text" onChange={(event:ChangeEvent<HTMLInputElement>) => {
                    this.setState({
                        task: event.target.value
                    })
                }}/>
                <button onClick={() => this.addTask()}>Adicionar</button>
                <ul>
                    {taskList.map((task, index) => (
                        <div>
                        <li key={index}>{task}</li> <button onClick={() => this.removeTask(task)}>Remover</button>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List