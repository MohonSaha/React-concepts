import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Person from '../Person/Person';

const Persons = () => {
    const [persons, setPersons] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPersons(data))
    } ,[])
    return (
        <div>
            <h1>Weccome to my persons deatils site</h1>
            {
                persons.map(person => <Person 
                    person = {person}
                    key = {person.id}></Person>)
            }
        </div>
    );
};

export default Persons;