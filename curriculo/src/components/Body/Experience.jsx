import EduInfo from "./EduInfo"

const experience = [
    {occupation: 'Graphic Producer',
    time: '2019-2021',
    details: 'Dose Criativa'}, 
    {occupation: 'Administrative Assistant',
    time: '2021-2022',
    details: 'Awesome Infinity Academy'}
]

const Experience = () => {
    return(
        <div>
            <div className="title">
                <h2>Experience</h2>
            </div>
            <div className="blueBar">&nbsp;</div>
            <div className="textEducation">
                <EduInfo place={experience[0].occupation} time={experience[0].time} details={experience[0].details}/>
                <EduInfo place={experience[1].occupation} time={experience[1].time} details={experience[1].details}/>
            </div>
        </div>
    )
}

export default Experience