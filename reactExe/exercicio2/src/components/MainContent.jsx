import './style.css'

const MainContent = (props) => {
    const { img, title, imdb, director, comment} = props

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

export default MainContent