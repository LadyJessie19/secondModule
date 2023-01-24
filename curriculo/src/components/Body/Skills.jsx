import SkillViewer from './SkillViewer'

const abilities = [
    {ability: 'HTML',
    level: 'level 3'},
    {ability: 'CSS',
    level: 'level 3'},
    {ability: 'JavaScript',
    level: 'level 2'},
    {ability: 'English',
    level: 'level 4'},
    {ability: 'Git',
    level: 'level 3'}
]

const Skills = () => {
    return(
        <div>
            <div className="title">
                <h2>Skills</h2>
            </div>
            <div className="blueBar">&nbsp;</div>
                <SkillViewer ability={abilities[0].ability} level={abilities[0].level} />
                <SkillViewer ability={abilities[1].ability} level={abilities[1].level} />
                <SkillViewer ability={abilities[2].ability} level={abilities[2].level} />
        </div>
    )
}

export default Skills