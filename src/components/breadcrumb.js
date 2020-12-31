import React from "react";

import "../styles/breadcrumb.scss";

const Breadcrumb = ({ categories = [] }) => {
  return (
    <div className="breadcrumb">
      {categories.map((c,i) =>
        <span key={c+i} className="category-item">
          {c}{i < categories.length -1 ? " > " : ""}
        </span>
      )}
    </div>
  )
};

export default Breadcrumb;