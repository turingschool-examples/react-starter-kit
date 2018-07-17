import React from "react";
import Author from "./Author";
import Button from "./Button";
import "./Story.css";

const Story = props => {
  return (
    <div className="Story">
      <img src={props.img} />
      <div className="story-info">
        <div>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <Author
          authImg={props.authImg}
          authName={props.authName}
          estTime={props.estTime}
        />
      </div>
    </div>
  );
};

export default Story;
