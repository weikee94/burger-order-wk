import React from 'react';

// functional component
const person = (props) => {
    return <p onClick={props.click}>I am a {props.name} with age {props.age}!</p>;
};

export default person;
