import React, { ChangeEvent } from "react"

type State = {
  name: string
}

class UserForm extends React.Component<{}, State> {
  state = {
    name: "",
  }

  showInputValue = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log(this.state.name)

    const inputElement = document.getElementById("name") as HTMLInputElement
    const value = inputElement.valueAsNumber
    const valueAsNumber = Number(value)
  }

  render() {
    const { name } = this.state

    return (
      <form>
        <label htmlFor="name">Selecione o seu nome</label>
        <select
          value={name}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            this.setState({ name: event.target.value })
          }
        >
          <option value="Alberto">Alberto</option>
          <option value="Carlos">Carlos</option>
        </select>
        <button onClick={this.showInputValue}>Enviar</button>
      </form>
    )
  }
}

export default UserForm
