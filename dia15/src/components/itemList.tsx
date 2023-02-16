import React from "react"

type Props = {}

type State = {}

class itemList extends React.Component{
    constructor(props: any){
        super(props)
        this.state = { items: props.items, itemRemoved: null }
    }

    handleClick(item: any){
        const itens = this.state.items.filter((item) => item._id !== removedItem._id)
        this.setState({ items: itens, itemRemoved: item})
    }

    componentDidUpdate(prevState: Readonly<{}>, snapshot?: any): void {
        
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.items.map((item) => (
                        <li key={item.id} onClick={() => this.handleClick(item)}>{item.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default itemList