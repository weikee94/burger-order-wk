import React from "react";

import "./Person.css";
// functional component
const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am a {props.name} with age {props.age}!
      </p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;
