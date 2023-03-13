import products from './products'


const Body = () => {
    return(
        <>
        <h1>Produtos em estoque</h1>
            {products.map((item) => 
                <div className="product" key={item.id}>
                    <p>{item.name}</p>
                    <img src={item.photo} width="50px" alt="foto-produto" />
                    <p>R${item.price}</p>
                </div>
            )}
        </>
    )
}

export default Body