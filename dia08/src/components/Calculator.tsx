import React, { Component, ChangeEvent } from 'react'

type State = {
    res: number
}

export default class Calculator extends Component<{}, State> {
    state:State={
        res:0
    } 

    changeNum = (par: ChangeEvent<HTMLInputElement>) => {
        this.setState({res = par})
    }

  render() {
    return (
        <div>
        <h1>Calculator</h1>
        <label htmlFor="n1">Digite o primeiro numero:</label><br/>
        <input id="n1" onChange={this.changeNum(target.value)} />
        <input id="n1" onChange={(event: ChangeEvent<HTMLInputElement>) => this.setState({ res: event.target.value })} />

        <p>{this.state.res}</p>
        </div>
        )
  }
}
