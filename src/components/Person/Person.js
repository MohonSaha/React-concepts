import React from 'react';

const Person = (props) => {
    const {name} = props.person;
    return (
        <div>
            <h2>Name: {name}</h2>
        </div>
    );
};

export default Person;