import React from "react"
import "./style.css"

const Card = (props) => {
    
    const handleShow = () => {       
        props.handleSetState({
            title:`${props.title}`,
            imdb:`${props.imdb}`,
            director:`${props.director}`,
            comment:`${props.comment}`,
            img:`${props.img}`,
        })       
    }

    return (
        <div className="card" onClick={() => handleShow()}>
           <img src={props.img} className="imgCard" alt="imgCard" />
        </div>   
    )
}

export default Card