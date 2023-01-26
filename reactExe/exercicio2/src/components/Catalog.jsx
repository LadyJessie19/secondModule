import React from "react"
import './style.css'
import Card from "./Card"

const Catalog = ({movies, handleSetState}) => {
    return(      
    <div className="bodyCatalog">
        <div className="catalogTitle">
            <h1>Catalog</h1>
        </div>
        <div className="catalogImgs">
            {movies.map((value, index) => (
                    <Card
                        key={`card-${index}`}
                        handleSetState={handleSetState}
                        title={value.title} 
                        imdb={value.imdb} 
                        director={value.director} 
                        comment={value.comment}
                        img={value.img}
                    />
                ))}
        </div>
    </div>
    )
}

export default Catalog