import './style.css'

const Catalog = () => {

    return(
    <div className="bodyCatalog">
        <div className="catalogTitle">
            <h1>Catálogo</h1>
        </div>
        <div className="catalogImgs">
            <div className="lineImgs">
            <img src="src\assets\mulan.jpg" alt="img Mulan" />
            <img src="src\assets\bela.jpg" alt="img Bela" />
            <img src="src\assets\branca.jpg" alt="img Branca" />
            </div>
            <div className="lineImgs">
            <img src="src\assets\sereia.jpg" alt="img Sereia" />
            <img src="src\assets\aladim.jpeg" alt="img Aladim" />
            <img src="src\assets\princesa.jpg" alt="img Princesa" />
            </div>
        </div>
    </div>
    )
}

export default Catalog