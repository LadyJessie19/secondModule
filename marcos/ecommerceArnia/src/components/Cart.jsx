import React from "react";
import Game from './Game'

const Cart = (props) => {
  const {countCartItems, cartItems, products, onAdd, onRemove} = props
    const gamesMap = products.map((product, index) => {
        return <Game key={index} product={product} onAdd={onAdd} onRemove={onRemove}/>
    })
  return (
    <div className="bodyProducts">
      <div className="display">
        <h1>Cart</h1>
        <h2>{countCartItems}</h2>
      </div>
      <div className="gamesSection">
        {gamesMap}
      </div>
      <div className="buttonFooter">
        {/* <div>{cartItems.map((item) => <p>{item.name}</p>)}</div> */}
        <button>Go to the Cart</button>
      </div>
    </div>
  );
};

export default Cart