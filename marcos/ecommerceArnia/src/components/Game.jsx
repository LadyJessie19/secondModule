import React from 'react'

const Game = (props) => {
    const { product, onAdd, onRemove } = props
    return (
        <div className="game">
          <div className="gameImg">
            <img src={product.img} />
          </div>
          <div className="gameInfo">
          {/* <input type="checkbox" onClick={() => onAdd(product)}/> */}
          <button className='buttonSpecial' onClick={() => onAdd(product)}>+</button>
          <button className='buttonSpecial' onClick={() => onRemove(product)}>-</button>
          <p>Price: R${product.price}</p>
          </div>
        </div>
    )
}

export default Game