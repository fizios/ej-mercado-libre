import React from "react";

import "../styles/details.scss";

const ItemDetails = ({ details }) => {
  const { condition, sold_quantity, title, price, picture, description} = details
  return (
    <div className="detail-container">
      <div className="item-info">
        <div className="picture-container">
          <img src={picture} alt={title}/>
        </div>
        <div className="info-container">
          <span className="state-quantity">{condition === "new" ? "Nuevo" : "Usado"} - {sold_quantity} vendido{sold_quantity !== 1 ? "s" : "" }</span>
          <span className="name">{title}</span>
          <span className="price-info">{price.currency} {price.amount}</span>
          <button className="buy">Comprar</button>
        </div>
      </div>
      <div className="item-description">
        <h3>Descripcion del producto</h3>
        <p className="description"> {description} </p>
      </div>
    </div>
  )
};

export default ItemDetails;