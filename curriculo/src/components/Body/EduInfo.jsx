
const EduInfo = (props) => {
    const { place, time, details } = props

    return(
    <div className="eduInfo">
        <div className="firstLine">
            <h3>{place}</h3>
            <p>{time}</p>
        </div>
        <div className="secondLine">
            <p>{details}</p>
        </div>
    </div>
    )
}

export default EduInfo