import React from "react"

type TitleProps = {
  value: string
}

type TitleState = {
  titleModifier: string
  numberModifier: number
}

// Stateless component - Função
// Stateful component - Classe

class TitleClass extends React.Component<TitleProps, TitleState> {
  state = {
    titleModifier: "!",
    numberModifier: 1,
  }

  updateModifier = (modifier: string) => {
    this.setState({ titleModifier: modifier })
  }

  render() {
    const { value } = this.props // Título 3
    const { titleModifier } = this.state // .
    return (
      <>
        <h1>{`${value}${titleModifier}`}</h1>
        <button onClick={() => this.updateModifier(".")}>Modificar</button>
      </>
    ) //<h1> Título 3! </h1>
  }
}

export default TitleClass
