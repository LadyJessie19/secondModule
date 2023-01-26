import React from "react"
import "./card.css"

const Card = (props) => {
    
    const handleShow = () => {       
        props.handleSetState({
            title:`${props.title}`,
            imdb:`${props.imdb}`,
            director:`${props.director}`,
            sinopse:`${props.sinopse}`,
            img:`${props.img}`,
        })       
    }

    return (
        <div className="card" onClick={() => handleShow()}>
           <img src={props.img} className="logo" alt="Arnia logo" />
        </div>   
    )
}

export default Card