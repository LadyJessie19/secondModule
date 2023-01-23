import './Header.css'

const Header = () => {
    const randomNumber = Math.random().toFixed(1)
    return(
    <div className="header">
            <p>{randomNumber} é maior ou menor que 0.5?</p>
        <h1>{randomNumber > 0.5 ? "maior que" : "menor que"}</h1>
    </div>
    )
}

export default Header