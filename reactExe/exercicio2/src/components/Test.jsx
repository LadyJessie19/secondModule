import React from 'react'

class Test extends React.Component {
    state = {
        img: Image,
        title: title,
        director: director,
        imdb: imdb,
        comment: comment
    }

    render()
    return(
        <div className="mainContent">
            <div className="imgMovie">
                <img src={img} alt="Image Movie" />
            </div>
            <div className="contentMovie">
                <div className="firstLine">
                    <h2>{title}</h2>
                    <h4>Diretor: {director}</h4>
                </div>
                <div className="secondLine">
                    <h4>IMDB: {imdb}</h4>
                    <h5>{comment}</h5>
                </div>
            </div>
        </div>
    
    )
}

export default Test