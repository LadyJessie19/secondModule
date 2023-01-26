import React from "react"
import Card from "../card-movie"
import './content.css'

const Content = (props) => {
    const { title, imdb, img, director, sinopse } = props
    return (
        <div className="content">
            <Card img={img}/>
            <div className="section-title-imdb">
                <h3>{title}</h3>
                <h3>{imdb}</h3>
            </div>
            <div className="section-director-sinopse">
                <h3>{director}</h3>
                <p>{sinopse}</p>
            </div>
        </div>   
    )
}

export default Content