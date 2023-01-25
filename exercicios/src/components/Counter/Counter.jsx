import React from 'react'

class Counter extends React.Component{
    state={
        count: 0,
    }
    
    counterPlus = () => (
        this.setState({count: this.state.count + 1})
    )

    counterMinus = () => (
        this.setState({count: this.state.count - 1})
    )

    render() {
        return(
            <div>
                <button onClick={this.counterMinus}>Diminuir Valor</button>
                {this.state.count}
                <button onClick={this.counterPlus}>Aumentar Valor</button>
            </div>
        )
    }
}

export default Counter