import React from "react"
import arniaLogo from '../../assets/icon_arnia.svg'
import Card from "../card-movie"
import './listMovie.css'

const ListMovie = ({movies, handleSetState}) => {        
    return (
        <div className="list-movie">
            <div className="title-section">
                <h2>Catálogo</h2>
            </div>
            <div className="items-movie">
                {movies.map((valor, indice) => (
                    <Card
                        key={`card-${indice}`}
                        handleSetState={handleSetState}
                        title={valor.title} 
                        imdb={valor.imdb} 
                        director={valor.director} 
                        sinopse={valor.sinopse}
                        img={valor.img}
                    />
                ))}
            </div>
        </div>   
    )
}

export default ListMovie