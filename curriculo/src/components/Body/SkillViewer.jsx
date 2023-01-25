
const SkillViewer = (props) => {
    const { ability, level } = props
    return(
    <div className='skillViewer'>
        <span>{ability}</span>
        <p>{level}</p>
    </div>
    )
}

export default SkillViewer