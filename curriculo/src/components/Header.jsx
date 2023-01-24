import './Header.css'

const Header = () => {
    return(
        <div className="header">

            <div className="comHeader">
                <div className="Icon"><img src=".\src\assets\envelope.svg" alt="" /></div>
                <div>jessie.moura@gmail.com</div> 
            </div>
            <div className="comHeader">
                <div className="Icon"><img src=".\src\assets\link.svg" alt="" /></div>
                <div><a href="http://github.com/LadyJessie19" target="_blank">https://github.com/LadyJessie19</a></div>
            </div>
            <div className="comHeader">
                <div className="Icon"><img src=".\src\assets\phone.svg" alt="" /></div>
                <div>(21) 1234-5678</div>
            </div>
            <div className="telefone"></div>
        </div>
    )
}

export default Header