import React from "react"
import './style.css'
import Card from "./Card"

const MainContent = (props) => {
    const { img, title, imdb, director, comment} = props

    return(
    <div className="mainContent">
        <div className="imgMovie">
            <Card img={img} />
        </div>
        <div className="contentMovie">
            <div className="firstLine">
                <h2>{title}</h2>
                <h4>Director: {director}</h4>
            </div>
            <div className="secondLine">
                <h4>IMDB: {imdb}/10</h4>
                <h5>{comment}</h5>
            </div>
        </div>
    </div>
    )
}

export default MainContent