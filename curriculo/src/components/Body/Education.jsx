import BodyInfo from "./BodyInfo"

const education = [
    {title: 'Intelectus',
    time: '2011-2014',
    details: 'Construindo seus sonhos com nosso ensino'}, 
    {title: 'Barão de Lucena',
    time: '2014-2016',
    details: 'Seu sonhos estão há palavras de distancia'}, 
    {title: 'Arnia',
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
                <BodyInfo title={education[0].title} time={education[0].time} details={education[0].details}/>
                <BodyInfo title={education[1].title} time={education[1].time} details={education[1].details}/>
                <BodyInfo title={education[2].title} time={education[2].time} details={education[2].details}/>

            </div>
        </div>
    )
}

export default Education