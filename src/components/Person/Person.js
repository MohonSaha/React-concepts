import React from 'react';
import { addToDb, removeFromDb } from '../utilities/fakedb';
import './Person.css'

const Person = (props) => {
    const {name, id, gender, email} = props.person;

    const addToCart = (id) =>{
       addToDb(id);
    }

    const removeFromCart = (id) =>{
        removeFromDb(id);
    }

    return (
        <div className='product'>
            <h2>Name: {name}</h2>
            <small>Id No: {id}</small>
            <p>Gender: {gender}</p>
            <p>Email: {email}</p>
            <button onClick={() => addToCart(id)}>Add Person</button>
            <button className='remove' onClick={() => removeFromCart(id)}>Remove Person</button>
            
        </div>
    );
};

export default Person;