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
    level: 'level 3'},
    {ability: 'Python',
    level: 'level 1'}

]

const abilitiesViewer = abilities.map((value, index) => <SkillViewer key={index} ability={value.ability} level={value.level}/>)

const Skills = () => {
    return(
        <div>
            <div className="title">
                <h2>Skills</h2>
            </div>
            <div className="blueBar">&nbsp;</div>
                <div className="skillsSection">
                    {abilitiesViewer}
                </div>
        </div>
    )
}

export default Skills