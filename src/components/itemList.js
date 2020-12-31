import React  from "react";
import Item from "./item";

import "../styles/list.scss";

const ItemList = ({ items }) => {
  return (
    <div className="list-container">
      {items.map(i => <Item key={i.id} {...i} />)}
    </div>
  )
};

export default ItemList;