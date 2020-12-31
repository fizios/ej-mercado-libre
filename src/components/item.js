import React from "react";
import { withRouter } from "react-router";

const Item = props => {
  const { id, price, picture:imgUrl, state_name:state, free_shipping, title, history } = props

  const handleClickItem = () => {
    history.push(`/items/${id}`);
  }

  return (
    <div className="item-container" onClick={handleClickItem}>
      <div className="item-data">
        <div className="picture">
          <img src={imgUrl} alt={title}/>
        </div>
        <div className="info-container">
          <p className="price">
            {price.currency} {price.amount}
            {free_shipping && <img src="/icons/shipping.png" alt="free_shipping"/>}
          </p>
          <p className="title">
            {title}
          </p>
        </div>
      </div>
      <div className="item-location">{state}</div>
    </div>
  )
};

export default withRouter(Item);
