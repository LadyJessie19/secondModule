
const BodyInfo = (props) => {
    const { title, time, details } = props

    return(
    <div className="eduInfo">
        <div className="firstLine">
            <h3>{title}</h3>
            <p>{time}</p>
        </div>
        <div className="secondLine">
            <p>{details}</p>
        </div>
    </div>
    )
}

export default BodyInfo