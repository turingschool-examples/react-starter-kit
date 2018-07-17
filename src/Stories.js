import React from "react";
import Story from "./Story";
import "./Stories.css";

const Stories = props => {
  return (
    <div className="Stories">
      <div className="  stories-header">
        <h3>{props.storiesTitle}</h3>
        <a href="#">See more</a>
      </div>
      <div className="stories-grid">
        {props.stories.map((story, i) => {
          return (
            <Story
              key={`stories${i}`}
              img={story.img}
              title={story.title}
              desc={story.desc}
              authImg={story.authImg}
              authName={story.authName}
              estTime={story.estTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
