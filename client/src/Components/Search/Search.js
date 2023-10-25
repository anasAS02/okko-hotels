import './Search.css';
import Card from './Card';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SEARCH_ROOM } from '../../Utils/Apis';


export default function Search(props) {
  const[rooms, setRooms] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState('');
    
  useEffect(() => {
      axios.post(SEARCH_ROOM + searchTerm).then((data) => setRooms(data.data.data));
      if(searchTerm == ''){
        setRooms([]);
      }
  }, [searchTerm])

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

return (
  <div className={`box-search${props.search ? " active" : ""}${searchTerm !== '' ? " result" : ''}`}>
    <input
      type="text"
      placeholder="Search..."
      autoFocus
      value={searchTerm}
      onChange={handleChange}
    />
    <div className="card-container">
      {rooms.length > 0 && rooms.map((room, index) => (
        <Card key={index} CityName={room.CityName} image={room.imgOne} />
      ))}
    </div>
  </div>
);
};