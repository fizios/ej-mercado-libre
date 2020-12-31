import React, {useState} from "react";
import { withRouter } from "react-router";

import "../styles/searchBar.scss";

const SearchBar = ({ history }) => {
  const [value, setValue] = useState("");

  const handleChangeInput = event => {
    setValue(event.currentTarget.value);
  }

  const handleSubmitSearch = e => {
    e.preventDefault();
    history.push(`/items?q=${value}`);
  }

  return (
    <div className="header">
      <div className="search-bar">
        <div className="logo">
          <img src="/logo.png" alt="Mercado Libre"/>
        </div>
        <div className="search-input">
          <form onSubmit={handleSubmitSearch}>
            <input
              placeholder="Nunca dejes de buscar"
              value={value}
              onChange={handleChangeInput}
            />
            <button type="submit">
              <img src="/icons/search.png" alt="Buscar"/>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};



export default withRouter(SearchBar);