import React, { useState, useEffect } from 'react';
import Card from './Card';

import './Search.css';

export default function Search(props) {
  const[room, setRoom] = useState([]);
      
    useEffect(() => {
        fetch('https://astalaat02.github.io/Okko-Hotel/api/okko.json')
        .then((res) => res.json())
        .then((data) => setRoom(data['rooms']));
    }, [])

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const filterRoom = room.filter(room =>
    room.CityName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className={`box-shearch${props.search ? " active" : ""}`}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className='search-bar'>
      <p>Your Search :</p>
      </div>
      <div className="card-container">
        {filterRoom.map((room, index) => (
          <Card key={index} title={room.CityName} image={room.imgOne} />
        ))}
      </div>
    </div>
  );
};