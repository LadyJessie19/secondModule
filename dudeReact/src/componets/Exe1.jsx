import { Component } from "react"

class Exe1 extends Component{
    constructor(props){
        super(props)
    }

    state={
        variable: 'Lolipop'
    }

    showSomething(){
        const { variable } = this.state

        if(variable === 'Lolipop'){
            this.setState({variable: "Cakepop"})
        } else if(variable === "Cakepop"){
            this.setState({variable: 'Gumpop'})
        } else if(variable === 'Gumpop'){
            this.setState({variable: 'Lolipop'})
        }  
    }

    render(){
        const {variable} = this.state
        return(
            <>
                <p><strong>Madame Pepper</strong></p>
                <button onClick={() => this.showSomething()}>Next</button>
                <p><strong>~choose your candy~</strong></p>
                <p>{variable}</p>
                <input type="text" />
            </>
        )
    }
}

export default Exe1

