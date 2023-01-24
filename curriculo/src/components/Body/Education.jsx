import EduInfo from "./EduInfo"

const education = [
    {place: 'Intelectus',
    time: '2011-2014',
    details: 'Construindo seus sonhos com nosso ensino'}, 
    {place: 'Barão de Lucena',
    time: '2014-2016',
    details: 'Seu sonhos estão há palavras de distancia'}, 
    {place: 'Arnia',
    time: '2022-2023',
    details: 'Ensino de primeira qualidade'}
    
]

const Education = () => {
    return(
        <div>
            <div className="title">
                <h2>Education</h2>
            </div>
            <div className="blueBar">&nbsp;</div>
            <div className="textEducation">
                <EduInfo place={education[0].place} time={education[0].time} details={education[0].details}/>
                <EduInfo place={education[1].place} time={education[1].time} details={education[1].details}/>
                <EduInfo place={education[2].place} time={education[2].time} details={education[2].details}/>

            </div>
        </div>
    )
}

export default Education