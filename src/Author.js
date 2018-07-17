import React from "react";
import "./Author.css";

const Author = props => {
  return (
    <div className="author-info">
      <img src={props.authImg} className="author-image" />
      <div className="author-text">
        <h4>{props.authName}</h4>
        <h4>{props.estTime} read</h4>
      </div>
    </div>
  );
};

export default Author;
