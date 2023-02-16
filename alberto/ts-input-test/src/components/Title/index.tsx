import "./styles.css"

type TitleProps = {
  value: string
}

const Title = ({ value }: TitleProps) => <h1 className="title">{value}</h1>

export default Title
