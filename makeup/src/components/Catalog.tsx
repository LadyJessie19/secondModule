import { CatalogStyle } from "../style/style"

type ProductsType = {
    id: number,
    name: string,
    photo: string,
    price: number
}

const Catalog = ({products}:ProductsType[]) => {

    return(
        <CatalogStyle>
            {products.map((item) => 
                <div className="product" key={item.id}>
                    <p>{item.name}</p>
                    <img src={item.photo} width="50px" alt="foto-produto" />
                    <p>R${item.price}</p>
                </div>
            )}
        </CatalogStyle>
    )
}

export default Catalog