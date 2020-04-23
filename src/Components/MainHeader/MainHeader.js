import React from 'react';

const MainHeader = (props) => {
  return (
    <div className="header">
      <button onClick={() => props.onShowShoppingCart()} type="button"><span role="img" aria-label="shopping cart">{props.cartItemNumber > 0 ? `( ${props.cartItemNumber} )` : ""}👄</span></button>
      <p id="cartItems"></p>
      <h1>EPICODUS RECORDS</h1>
    </div>
  )
}

export default MainHeader;
