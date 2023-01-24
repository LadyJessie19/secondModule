
const SkillViewer = (props) => {
    const { ability, level } = props;
    <div className="SkillViewer">
        <span>{ability}</span>
        <span>{level}</span>
    </div>
}

export default SkillViewer